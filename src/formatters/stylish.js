const stylishHandlers = {
  unchanged({ key, value }) {
    return `    ${key}: ${value}`
  },
  changed({ key, value1, value2 }) {
    return [
      `  - ${key}: ${value1}`,
      `  + ${key}: ${value2}`,
    ]
  },
  deleted({ key, value }) {
    return `  - ${key}: ${value}`
  },
  added({ key, value }) {
    return `  + ${key}: ${value}`
  },
}

const indent = (spaces) => ' '.repeat(spaces);

const formatToStylish = (coll) => {
  if (!Array.isArray(coll)) {
    return 'Error: Input data must be an array.'
  }

  const formattedColl = coll.flatMap(item => stylishHandlers[item.type](item))

  return ['{', ...formattedColl, '}'].join('\n')
}

export default formatToStylish
