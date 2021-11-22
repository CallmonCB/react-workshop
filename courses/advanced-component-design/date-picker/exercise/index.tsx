import React from 'react'
import ReactDOM from 'react-dom'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerChangeMonth,
  DatePickerLabel,
} from './DatePicker'
import 'ProjectPlanner/styles/global-styles.scss'
import './styles.scss'

function App() {
  return (
    <div>
      <DatePicker selectRange>
        <div className="spacing">
          <header className="flex-split">
            <button className="button">Previous</button>
            <button className="button">Next</button>
          </header>
          <div>Month Label</div>
          <DatePickerCalendar />
          <hr />
          <div>Next Month Label</div>
          <DatePickerCalendar offset={1} />
        </div>
      </DatePicker>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
