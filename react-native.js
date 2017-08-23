'use strict';

const rules = require('./rules');

module.exports = {
  rules: rules({
    'no-console': [ 0 ],
    'react/prop-types': [ 'warn', { ignore: [ 'navigation', 'screenProps', 'dispatch' ] } ],
    'react-native/no-inline-styles': [ 'warn' ]
  }),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [ 'react', 'react-native' ],
  env: {
    browser: true,
    es6: true
  },
  extends: [ 'eslint:recommended', 'plugin:react-native/all', 'plugin:react/recommended' ]
};
