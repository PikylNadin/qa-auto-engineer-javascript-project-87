export default {
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.(test|spec).(js|mjs)',
    '**/?(*.)+(spec|test).(js|mjs)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  transformIgnorePatterns: [],
}
