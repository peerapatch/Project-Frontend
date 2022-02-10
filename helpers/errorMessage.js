export const getErrorMessage = (errors = {}) => {
  const errorsArr = Object.values(errors)
  const [errorMessage = ''] = errorsArr
  const defaultMessage = 'มีบางอย่างผิดพลาด  กรุณาติดต่อแอดมิน'
  const mapErrorMessage = {
    'Username already exists': 'บัญชีนี้ถูกใช้ลงทะเบียนไปแล้ว',
    'Phone number already exists': 'บัญชีนี้ถูกใช้ลงทะเบียนไปแล้ว',
    'Username not found': 'ชื่อบัญชีหรือรหัสผ่านผิด',
    'Wrong password': 'ชื่อบัญชีหรือรหัสผ่านผิด',
    'not found couponID': ' ไม่พบ คูปอง  !!',
    'Code is already exist': 'CODE มีการใช้งานแล้ว',
    'Code Format is wrong': 'CODE ผิดรูปแบบ',
    'Code is required': 'กรุณาใส่ CODE',
    'Type is required': 'กรุณาเลือก ประเภทส่วนลด ',
    'Value is required': 'กรุณาใส่ ส่วนลด'
  }
  return mapErrorMessage[errorMessage] || defaultMessage
}
