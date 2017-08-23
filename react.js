'use strict';

const rules = require('./rules');

module.exports = {
  rules: rules({
    'no-console': [ 'warn' ],
    'react/prop-types': [ 1, { ignore: [ 'dispatch' ] } ]
  }),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [ 'react' ],
  env: {
    browser: true,
    es6: true
  },
  extends: [ 'eslint:recommended', 'plugin:react/recommended' ]
};
