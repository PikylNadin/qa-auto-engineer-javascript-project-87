const plainHandlers = {
  unchanged() {
    return []
  },
  changed({ key, value1, value2 }) {
    return `Property '${key}' was updated. From ${JSON.stringify(value1)} to ${JSON.stringify(value2)}`
  },
  deleted({ key }) {
    return `Property '${key}' was removed`
  },
  added({ key, value }) {
    return `Property '${key}' was added with value: ${JSON.stringify(value)}`
  },
}

const formatToPlain = (coll) => {
  if (!Array.isArray(coll)) {
    return 'Error: Input data must be an array.'
  }

  return coll
    .flatMap(item => plainHandlers[item.type](item))
    .join('\n')
}

export default formatToPlain
