// import __ from 'lodash'
export const convertArrayToObject = (array, key) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item.key]: { name: item.data.name, status: item.data.status }
    }
  }, initialValue)
}

export const checkEnoughCredit = (giveCredit, haveCredit) => {
  if (haveCredit < giveCredit) {
    return false
  } else {
    return true
  }
}

export const isInt = (data) => {
  if (data % 1 === 0) {
    return true
  } else {
    return false
  }
}
export const CheckSpecialChar = (data, skipSpace) => {
  const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  // const check = /^[A-Za-z0-9 ]+$/
  const inValid = /\s/
  if (!format.test(data)) {
    if (skipSpace) {
      return true
    } else {
      if (!inValid.test(data)) {
        return true
      }
    }
  } else {
    return false
  }
}

export const CheckPassword = (data) => {
  const check = /^(?=.*\d)[A-Za-z0-9 ]+$/
  const inValid = /\s/
  if (check.test(data) && !inValid.test(data) && data.length >= 8) {
    return true
  } else {
    return false
  }
}

export const CountCredit = (textMessages) => {
  const number = textMessages
  const regex = /^[a-zA-Z0-9 !@#$%^&*/()\\`~,_.?'`;":{}|+=\][<>-]+$/g
  if (regex.test(textMessages)) {
    const credit = Math.ceil(number.length / 160)
    return credit
  } else {
    const credit = Math.ceil(number.length / 70)
    return credit
  }
}
