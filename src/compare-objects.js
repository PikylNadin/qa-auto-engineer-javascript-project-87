import _ from 'lodash'

const isEmpty = (data) => {
  return typeof data === 'object' && _.isEmpty(data)
}

const compareObjects = (data1, data2) => {
  if (!_.isObject(data1) || !_.isObject(data2)) {
    return []
  }

  if (isEmpty(data1) && isEmpty(data2)) {
    return []
  }

  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)))

  return keys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] }
    }
    if (!_.has(data2, key)) {
      return { key, type: 'deleted', value: data1[key] }
    }

    const value1 = data1[key]
    const value2 = data2[key]

    if (_.isEqual(value1, value2)) {
      return { key, type: 'unchanged', value: value1 }
    }

    return { key, type: 'changed', value1, value2 }
  })
}

export default compareObjects
