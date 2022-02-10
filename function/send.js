import _ from 'lodash'

export const formatPhoneNumber = (phone) => {
  var cleaned = ('' + phone).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '' + match[1] + '-' + match[2] + '-' + match[3]
  } else {
    return null
  }
}
export const validateNumber = (phone) => {
  const phoneNumber = phone.toString()
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  const regex2 = /^\d{9}$/
  const returnFalse = {
    status: false,
    value: phoneNumber
  }
  if (regex.test(phoneNumber)) {
    if (phoneNumber.substring(0, 2) === '08' || phoneNumber.substring(0, 2) === '06' || phoneNumber.substring(0, 2) === '09') {
      const returnPhone = {
        status: true,
        value: formatPhoneNumber(phoneNumber)
      }
      return returnPhone
    } else {
      return returnFalse
    }
  } else if (regex2.test(phoneNumber)) {
    if (phoneNumber.substring(0, 1) !== '0') {
      const newPhoneNumber = `0${phoneNumber}`
      return validateNumber(newPhoneNumber)
    } else {
      return returnFalse
    }
  } else if (phoneNumber.substring(0, 3) === '+66') {
    const newPhoneNumber = `0${phoneNumber.substring(3)}`
    return validateNumber(newPhoneNumber)
  } else if (phoneNumber.substring(0, 2) === '66' && phoneNumber.length === 11) {
    const newPhoneNumber = `0${phoneNumber.substring(2)}`
    return validateNumber(newPhoneNumber)
  } else {
    return returnFalse
  }
}

export const findDuplicateNumber = (data1, data) => {
  data1.map((item, key) => {
    item.listNumber.filter(number => number === data).map(numberChecker => {
      return false
    })
  })
  return true
}

export const setFileToNumberObj = (data, fileInfo, listNumberOfFiles, listLengthFiles, setListNumberOfFiles, setCountFiles) => {
  const PhoneNumber = _.compact(data)
  const phoneData = listNumberOfFiles
  const dataNumber = {
    fileName: fileInfo.name,
    listNumber: _.compact(PhoneNumber)
  }
  phoneData.fileList.push(dataNumber)
  setListNumberOfFiles(phoneData)
  const countAll = phoneData.fileList.length
  setCountFiles(countAll)
}

export const mergeTextAndFile = (Files, Texts) => {
  const phoneList = []
  Files.map((fileData, key) => {
    fileData.listNumber.map((data, key2) => {
      phoneList.push(data)
    })
  })
  const allPhoneNumber = phoneList.concat(Texts)
  return allPhoneNumber
}
export const mergeAll = (Files, Texts, Folders) => {
  const phoneList = []
  const foldersList = []
  Files.map((fileData, key) => {
    fileData.listNumber.map((data, key2) => {
      phoneList.push(data)
    })
  })
  if (Folders) {
    Folders.map((folderData, key) => {
      const arrMsnlist = folderData.msnlist.split(',')
      arrMsnlist.map((data, key2) => {
        foldersList.push([data.trim()])
      })
    })
  }

  let allPhoneNumber = phoneList.concat(Texts)
  allPhoneNumber = allPhoneNumber.concat(foldersList)
  return _.compact(allPhoneNumber)
}

export const textArrayToObj = (data) => {
  const dataList = []
  data.map((item, key2) => {
    if (item !== '' || item !== 0) {
      dataList.push([item.trim()])
    }
  })
  return dataList
}

export const checkPhoneNumberArray = (data) => {
  const dataList = []
  const dataWrong = []
  if (data !== 0) {
    data.map((item, key) => {
      const phoneNumber = validateNumber(item)
      if (phoneNumber.status) {
        dataList.push(phoneNumber.value)
      } else {
        dataWrong.push(phoneNumber.value)
      }
    })
  }
  const dataCurrect = _.unionBy(dataList)
  const duplicate = dataList.length - dataCurrect.length
  const dataArray = {
    data: dataCurrect,
    wrong: dataWrong,
    duplicate: duplicate
  }
  return dataArray
}

export const checkPhoneNumberString = (data) => {
  const phoneNumber = validateNumber(data)
  if (phoneNumber.status) {
    return phoneNumber.value
  } else {
    return 0
  }
}

export const convertForSend = (data) => {
  const dataListSend = []
  data.map((item, key) => {
    const phoneNumber = validateNumber(item)
    if (phoneNumber.status) {
      dataListSend.push(replaceString(phoneNumber.value, '-', ''))
    }
  })
  const dataSend = dataListSend.toString()
  return dataSend
}

export const replaceString = (str, search, replacement) => {
  return str.split(search).join(replacement)
}

export const getPhoneNetwork = (phone) => {
  const aisPrefix = ['061', '062', '063', '065', '082', '084', '090-1', '093-1', '093-5', '093-6', '092', '095-1', '095-2', '095-3', '095-9', '097', '098', '099', '080-0', '080-1', '080-2', '080-6', '080-7', '081-0', '081-1', '081-2', '081-7', '081-8', '081-9', '087-1', '087-2', '087-6', '085-4']
  const dtacPrefix = ['066', '085', '089', '090', '094', '080-4', '080-5', '081-3', '081-4', '081-5', '081-6', '087-3', '087-4 ', '087-5', '095-4', '095-5']
  const truePrefix = ['060', '083', '086', '088', '064', '093', '096', '091', '080-3', '081-7', '081-8', '081-9', '081-6', '087-3', '087-4 ', '087-5', '090-9', '094-0', '094-1', '095-6', '095-8', '099-5']
  const totPrefix = ['068']
  if (aisPrefix.find(el => el === phone.substring(0, 3)) || aisPrefix.find(el => el === phone.substring(0, 5))) {
    return 'ais'
  } else if (truePrefix.find(el => el === phone.substring(0, 3)) || truePrefix.find(el => el === phone.substring(0, 5))) {
    return 'truemove'
  } else if (dtacPrefix.find(el => el === phone.substring(0, 3)) || dtacPrefix.find(el => el === phone.substring(0, 5))) {
    return 'dtac'
  } else if (totPrefix.find(el => el === phone.substring(0, 3)) || totPrefix.find(el => el === phone.substring(0, 5))) {
    return 'tot'
  } else {
    return 'unknow'
  }
}

export const validateEmail = (email) => {
  const result = email.toString()
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const returnFalse = {
    status: false,
    value: result
  }
  if (re.test(result)) {
    const returnEmail = {
      status: true,
      value: result
    }
    return returnEmail
  } else {
    return returnFalse
  }
}

export const checkEmail = (email) => {
  const result = validateEmail(email)
  if (result.status) {
    return result.value
  } else {
    return ''
  }
}

export const checkStatus = (array) => {
  let count = 0
  array.forEach((item) => {
    if (item.data.status === true) count++
  })
  if (count) {
    return { count: count, status: true }
  } else {
    return { count: 0, status: false }
  }
}

export const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
