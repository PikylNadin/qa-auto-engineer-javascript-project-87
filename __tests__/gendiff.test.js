import '@jest/globals';
import { genDiff } from '../src/gendiff.js';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (fileName) =>
  path.join(__dirname, '..', '__fixtures__', fileName);

const readTestFile = (fileName) =>
  fs.readFileSync(getFixturePath(fileName), 'utf-8');

describe('genDiff: different output formats', () => {
  test.each([
    {
      format: 'stylish',
      expected: readTestFile('expectedStylishOutput.txt'),
    },
    {
      format: 'plain',
      expected: readTestFile('expectedPlainOutput.txt'),
    },
    {
      format: 'json',
      expected: readTestFile('expectedJsonOutput.txt'),
    },
  ])('json and yaml, $format output', ({ format, expected }) => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.yml'), format)).toBe(expected);
  });
});

describe('genDiff: exceptions are thrown, default outputFormat', () => {
  test('with unsupported data type', () => {
    expect(() => {
      genDiff(getFixturePath('expectedStylishOutput.txt'), getFixturePath('file2.json'));
    }).toThrow("'txt' parsing is not supported");
  });

  test('with unsupported output format', () => {
    expect(() => {
      genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'fakeFormat');
    }).toThrow("output to 'fakeFormat' is not supported");
  });
});

describe('genDiff: different file paths (default output format)', () => {
  test.each([
    {
      pathType: 'relative',
      pathToFile1: getFixturePath('file1.json'),
      pathToFile2: getFixturePath('file2.json'),
    },
    {
      pathType: 'absolute',
      pathToFile1: getFixturePath('file1.json'),
      pathToFile2: getFixturePath('file2.json'),
    },
  ])('with $pathType path', ({ pathToFile1, pathToFile2 }) => {
    const expected = readTestFile('expectedStylishOutput.txt');
    expect(genDiff(pathToFile1, pathToFile2)).toBe(expected);
  });
});

test('genDiff: with .yaml and .yml YAML file extensions', () => {
  const expected = readTestFile('expectedStylishOutput.txt');
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yml'))).toBe(expected);
});
