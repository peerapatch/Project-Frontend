import { DateRangePicker } from 'rsuite'
import DateFnsUtils from '@date-io/date-fns'

const CustomDateRangePicker = (props) => {
  const { startOfDay, endOfDay, addDays, startOfMonth, endOfMonth } = new DateFnsUtils()
  const { appearance, placeholder, onChange, disabledDate, defaultValue = [startOfDay(addDays(new Date(), -6)), endOfDay(new Date())] } = props
  const handleChange = (e) => onChange(e)
  const Ranges = [
    {
      label: 'วันนี้',
      value: [startOfDay(new Date()), endOfDay(new Date())]
    },
    {
      label: 'เมื่อวาน',
      value: [
        startOfDay(addDays(new Date(), -1)),
        endOfDay(addDays(new Date(), -1))
      ]
    },
    {
      label: '7 วันล่าสุด',
      value: [startOfDay(addDays(new Date(), -6)), endOfDay(new Date())]
    },
    {
      label: 'งวดที่ 1',
      value: [startOfMonth(new Date()), addDays(startOfMonth(new Date()), 14)]
    },
    {
      label: 'งวดที่ 2',
      value: [addDays(startOfMonth(new Date()), 15), endOfMonth(new Date())]
    },
    {
      label: 'เดือนนี้',
      value: [startOfMonth(new Date()), endOfMonth(new Date())]
    }
  ]
  return (
    <DateRangePicker
      ranges={Ranges}
      disabledDate={disabledDate}
      appearance={appearance}
      defaultValue={defaultValue}
      placeholder={placeholder}
      style={{ width: 280 }}
      onOk={handleChange}
      onChange={handleChange}
      placement='bottomEnd'
    />
  )
}

export default CustomDateRangePicker
