import React, { useState } from 'react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import moment from 'moment'

export function CustomDatePicker (props) {
  const [dateStart, setDateStart] = useState(new Date())
  const [dateEnd, setDateEnd] = useState(new Date())
  const handleDateChangeStart = (e) => {
    const dateStartSend = moment(e).format('YYYY-MM-DD')
    setDateStart(e)
    props.setDateStartSend(dateStartSend)
  }
  const handleDateChangeEnd = (e) => {
    const dateEndSend = moment(e).format('YYYY-MM-DD')
    setDateEnd(e)
    props.setDateEndSend(dateEndSend)
  }
  return (
    <div className='col-span-12 grid grid-cols-12'>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className='col-span-12 xl:col-span-5'>

          <DatePicker
            disableToolbar
            autoOk
            minDate={new Date()}
            maxDate={dateEnd}
            label='วันที่เริ่มต้น'
            variant='inline'
            value={dateStart}
            onChange={handleDateChangeStart}
            format='dd/MM/yyyy'
          />
        </div>
        <div className='col-span-12 xl:col-span-2'><div className='mx-10 py-5 xl:py-2 align-bottom h-full'> ถึง </div></div>
        <div className='col-span-12 xl:col-span-5'>
          <DatePicker
            disableToolbar
            autoOk
            minDate={dateStart}
            label='วันที่สิ้นสุด'
            variant='inline'
            value={dateEnd}
            onChange={handleDateChangeEnd}
            format='dd/MM/yyyy'
          />

        </div>
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default CustomDatePicker
