import _ from 'lodash'

export const chartOrderData = (data = []) => {
  const name = _.map(data, 'packageName')
  const value = _.map(data, 'profitNet')
  return {
    name: name,
    value: value
  }
}
