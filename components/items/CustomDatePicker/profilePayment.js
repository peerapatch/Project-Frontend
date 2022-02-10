import React, { useState } from 'react'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import moment from 'moment'

export function CustomDatePicker (props) {
  const [selectedDate, setSselectedDate] = useState(new Date())
  const today = moment(new Date()).format('YYYY-MM-DD HH:mm:ss').split(' ')
  const handleDateChange = (e) => {
    const dateTimeSend = moment(e).format('YYYY-MM-DD HH:mm:ss').split(' ')
    setSselectedDate(e)
    props.setDate(dateTimeSend[0])
    props.setTime(dateTimeSend[1])
    props.setErrorDate(false)
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        ampm={false}
        inputVariant='outlined'
        value={selectedDate}
        maxDate={today[0]}
        onChange={handleDateChange}
        format='dd/MM/yyyy HH:mm'
      />
    </MuiPickersUtilsProvider>
  )
}

export default CustomDatePicker
