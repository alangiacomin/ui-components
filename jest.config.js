module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  coverageDirectory: 'Report',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/wwwroot/',
  ],
  setupFiles: [
    './tests/setup.js',
  ],
  coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
  ],
  rootDir: './',
};