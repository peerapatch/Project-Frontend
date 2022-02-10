import moment from 'moment'
export const moneyFormat = (number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  const converted = formatter.format(number)
  if (isNaN(number)) {
    return formatter.format(0)
  }

  return converted
}

export const creditFormat = (number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
  const converted = formatter.format(number)
  if (isNaN(number)) {
    return formatter.format(0)
  }

  return converted
}

export const padNumber = (val, len) => {
  return ('000000000000000000' + val).substr(len * -1)
}

export const dateFormat = (data) => {
  return moment(data).format('YYYY-MM-DD')
}
