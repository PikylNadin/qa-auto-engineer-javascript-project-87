import path from 'path'
import fs from 'fs'
import process from 'process'
import parseData from './parsers.js'
import formatData from './formatters/index.js'
import compareObjects from './compare-objects.js'

const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath)

const extractFormat = (filepath) => path.extname(filepath).slice(1)

const getData = (filepath) => {
  const fullPath = buildFullPath(filepath)
  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  return parseData(fileContent, extractFormat(filepath))
}

const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const data1 = getData(filepath1)
  const data2 = getData(filepath2)
  const differences = compareObjects(data1, data2)

  return formatData(differences, outputFormat)
}

export default genDiff
