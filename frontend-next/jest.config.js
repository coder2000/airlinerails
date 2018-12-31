module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/src/tests/setup.js',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
