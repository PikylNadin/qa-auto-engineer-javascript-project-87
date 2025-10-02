import '@jest/globals'
import genDiff from '../src/gendiff.js'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = fileName =>
  path.join(__dirname, '..', '__fixtures__', fileName)

const readFixtureFile = fileName =>
  fs.readFileSync(getFixturePath(fileName), 'utf-8')

const expectedStylishOutput = readFixtureFile('expectedStylishOutput.txt')
const expectedPlainOutput = readFixtureFile('expectedPlainOutput.txt')
const expectedJsonOutput = readFixtureFile('expectedJsonOutput.txt')

describe('genDiff', () => {
  const formats = ['yml', 'yaml', 'json']

  describe('output formats', () => {
    test.each(formats)('format %s, stylish output', (format) => {
      const filepath1 = getFixturePath(`file1.${format}`)
      const filepath2 = getFixturePath(`file2.${format}`)
      expect(genDiff(filepath1, filepath2, 'stylish')).toBe(expectedStylishOutput)
    })

    test.each(formats)('format %s, plain output', (format) => {
      const filepath1 = getFixturePath(`file1.${format}`)
      const filepath2 = getFixturePath(`file2.${format}`)
      expect(genDiff(filepath1, filepath2, 'plain')).toBe(expectedPlainOutput)
    })

    test.each(formats)('format %s, json output', (format) => {
      const filepath1 = getFixturePath(`file1.${format}`)
      const filepath2 = getFixturePath(`file2.${format}`)
      expect(genDiff(filepath1, filepath2, 'json')).toBe(expectedJsonOutput)
    })

    test.each(formats)('format %s, default (stylish) output', (format) => {
      const filepath1 = getFixturePath(`file1.${format}`)
      const filepath2 = getFixturePath(`file2.${format}`)
      expect(genDiff(filepath1, filepath2)).toBe(expectedStylishOutput)
    })
  })

  describe('exceptions', () => {
    test('unsupported data type', () => {
      expect(() => {
        genDiff(getFixturePath('file1.txt'), getFixturePath('file2.json'))
      }).toThrow('\'txt\' parsing is not supported')
    })

    test('unsupported output format', () => {
      expect(() => {
        genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'fakeFormat')
      }).toThrow('output to \'fakeFormat\' is not supported')
    })
  })

  describe('file paths', () => {
    test('absolute paths', () => {
      const filepath1 = getFixturePath('file1.json')
      const filepath2 = getFixturePath('file2.json')
      expect(genDiff(filepath1, filepath2)).toBe(expectedStylishOutput)
    })

    test('relative paths', () => {
      const filepath1 = path.relative(process.cwd(), getFixturePath('file1.json'))
      const filepath2 = path.relative(process.cwd(), getFixturePath('file2.json'))
      expect(genDiff(filepath1, filepath2)).toBe(expectedStylishOutput)
    })
  })

  test('YAML file extensions', () => {
    const filepath1 = getFixturePath('file1.yaml')
    const filepath2 = getFixturePath('file2.yml')
    expect(genDiff(filepath1, filepath2)).toBe(expectedStylishOutput)
  })
})
