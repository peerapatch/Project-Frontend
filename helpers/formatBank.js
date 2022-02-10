export const renderFormatBank = (bankNumber) => {
  let formatBankNumber = bankNumber
  if (bankNumber) {
    if (bankNumber.length === 10) {
      formatBankNumber = bankNumber.substr(0, 3) + '-' + bankNumber.substr(3, 1) + '-' + bankNumber.substr(4, 5) + '-' + bankNumber.substr(9, 1)
    } else if (bankNumber.length === 12) {
      formatBankNumber = bankNumber.substr(0, 3) + '-' + bankNumber.substr(3, 1) + '-' + bankNumber.substr(4, 5) + '-' + bankNumber.substr(9, 3)
    } else {
      formatBankNumber = 'ไม่ถูกต้อง'
    }
  } else {
    formatBankNumber = 'ไม่ถูกต้อง'
  }
  return formatBankNumber
}