import React, { useState, useRef, useEffect } from 'react'
import { MdModeEdit } from 'react-icons/md'
import './EditTitle.scss'

type Props = {
  title: string
  placeholder?: string
  onSave(title: string): void
}

export const EditTitle: React.FC<Props> = ({ title, placeholder, onSave }) => {
  const [edit, setEdit] = useState(false)
  const editTitleRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function saveTitle() {
    setEdit(false)
    if (inputRef.current && inputRef.current.value.trim() !== title) {
      onSave(inputRef.current.value.trim())
    }
  }

  function startEdit() {
    setEdit(true)
  }

  function handleFocusOnEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter') setEdit(true)
  }

  function handleInputKeyDown(event: React.KeyboardEvent) {
    if (inputRef.current && event.key === 'Enter') {
      event.stopPropagation()
      // inputRef.current.blur()
      if (editTitleRef.current) {
        editTitleRef.current.focus()
      }
    }
  }

  useEffect(() => {
    if (edit && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [edit])

  return (
    <div
      ref={editTitleRef}
      className="edit-title icon-text"
      tabIndex={0}
      onKeyDown={handleFocusOnEnter}
    >
      {edit ? (
        <input
          type="text"
          ref={inputRef}
          defaultValue={title.trim()}
          onBlur={saveTitle}
          onKeyDown={handleInputKeyDown}
        />
      ) : (
        <span onClick={startEdit}>{title || <em>{placeholder || 'No Title'}</em>}</span>
      )}
      <MdModeEdit />
    </div>
  )
}
