module.exports = {
  preset: 'jest-preset-ns',
  globals: {
    // @see https://github.com/natterstefan/jest-preset-ns/issues/4#issuecomment-765416205
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '@/(.*)': ['<rootDir>/$1', '<rootDir>/src/$1'],
  },
  testMatch: ['/**/__tests__/*.test.ts', '/**/__tests__/*.test.tsx'],
}
