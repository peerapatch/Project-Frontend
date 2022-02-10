import React, { useState } from 'react'
import { DateTimePicker, DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import moment from 'moment'

export function CustomDatePicker (props) {
  const type = props.type ? props.type : 'date'
  const dateFormat = props.dateFormat ? props.dateFormat : 'YYYY-MM-DD'
  const minDate = props.minDate ? props.minDate : new Date()
  if (type === 'date') {
    const [selectedDate, setSselectedDate] = useState(new Date(props.value) || new Date())
    const handleDateChange = (e) => {
      const dateTimeSend = moment(e).format(dateFormat)
      setSselectedDate(e)
      props.setSelectedDate(dateTimeSend)
    }
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          ampm={false}
          label={props.label}
          inputVariant='outlined'
          value={selectedDate}
          minDate={minDate}
          onChange={handleDateChange}
          format='dd/MM/yyyy'
        />
      </MuiPickersUtilsProvider>
    )
  } else {
    const [selectedDate, setSselectedDate] = useState(new Date(props.value) || new Date())
    const handleDateChange = (e) => {
      const dateTimeSend = moment(e).format(dateFormat)
      setSselectedDate(e)
      props.setSelectedDate(dateTimeSend)
    }
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          ampm={false}
          label={props.label}
          inputVariant='outlined'
          value={selectedDate}
          minDate={minDate}
          onChange={handleDateChange}
          format='dd/MM/yyyy HH:mm'
        />
      </MuiPickersUtilsProvider>
    )
  }
}

export default CustomDatePicker
