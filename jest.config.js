export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
    transform: {
    '^.+\\.ts$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules'],
};