/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
      "\\.(s?css)$": "<rootDir>/src/jest/__mocks__/styleMock.js"
  },
};
