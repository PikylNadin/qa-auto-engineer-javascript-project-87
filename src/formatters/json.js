const formatToJson = (coll) => {
  if (!Array.isArray(coll)) {
    throw new Error('Data passed to JSON formatter must be an array.')
  }
  return JSON.stringify(coll)
}

export default formatToJson
