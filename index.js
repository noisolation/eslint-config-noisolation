'use strict';

const rules = require('./rules');

module.exports = {
  rules: rules({
    'no-console': [ 'warn' ],
  }),
  env: {
    node: true,
    es6: true
  },
  extends: [ 'eslint:recommended' ]
};
