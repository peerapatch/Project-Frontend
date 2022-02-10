export const pagesName = (pages) => {
  const defaultPages = 'ShortMS'
  const mapPages = {
    '': 'Dashboard',
    dashboard: 'Dashboard',
    customer: 'รายการลูกค้า',
    coupon: 'จัดการส่วนสด',
    create: 'สร้าง',
    doc: 'คู่มือ',
    statement: 'ประวัติการเงิน',
    'coupon/create': 'สร้างคูปอง',
    'coupon/update': 'แก้ไขคูปอง',
    'doc/pricing': 'ตารางราคา',
    'statement/view': 'รายละเอียดการเงิน',
    'customer/view': 'รายละเอียดลูกค้า'
  }
  return mapPages[pages] || defaultPages
}
