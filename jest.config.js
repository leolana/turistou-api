module.exports = {
  testEnvironment: 'node',
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'node',
    "json"
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.tsx?$',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
  ],
  setupTestFrameworkScriptFile: './test/unit/infra/setup.ts'
};
