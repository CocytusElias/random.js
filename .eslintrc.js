module.exports = {
  root: true,
  env: {
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: ['eliassama/typescript'],
};
