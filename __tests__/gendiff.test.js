import '@jest/globals'
import genDiff from '../src/gendiff.js'
import fileURLToPath from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = (fileName) =>
  path.join(__dirname, '..', '__fixtures__', fileName)

const readFixtureFile = (fileName) =>
  fs.readFileSync(getFixturePath(fileName), 'utf-8')

const expectedOutputs = {
  stylish: readFixtureFile('expectedStylishOutput.txt'),
  plain: readFixtureFile('expectedPlainOutput.txt'),
  json: readFixtureFile('expectedJsonOutput.txt'),
}

describe('genDiff: output formats', () => {
  const formats = ['yml', 'yaml', 'json']
  const outputFormats = Object.keys(expectedOutputs)

  test.each(formats)('format %s', (format) => {
    const filepath1 = getFixturePath(`file1.${format}`)
    const filepath2 = getFixturePath(`file2.${format}`)

    outputFormats.forEach(output => {
      expect(genDiff(filepath1, filepath2, output)).toBe(expectedOutputs[output])
    })
  })
})

describe('genDiff: exceptions and default output format', () => {
  test('with unsupported data type', () => {
    expect(() => {
      genDiff(getFixturePath('expectedStylishOutput.txt'), getFixturePath('file2.json'))
    }).toThrow("'txt' parsing is not supported")
  })

  test('with unsupported output format', () => {
    expect(() => {
      genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'fakeFormat')
    }).toThrow("output to 'fakeFormat' is not supported")
  })
})

describe('genDiff: different file paths (default output format)', () => {
  test.each([
    { pathType: 'relative', pathToFile1: getFixturePath('file1.json'), pathToFile2: getFixturePath('file2.json') },
    { pathType: 'absolute', pathToFile1: getFixturePath('file1.json'), pathToFile2: getFixturePath('file2.json') },
  ])('with $pathType path', ({ pathToFile1, pathToFile2 }) => {
    expect(genDiff(pathToFile1, pathToFile2)).toBe(expectedOutputs.stylish)
  })
})

test('genDiff: with .yaml and .yml YAML file extensions', () => {
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yml'))).toBe(expectedOutputs.stylish)
})
