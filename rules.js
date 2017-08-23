'use strict';

const defaultRules = {
  'indent': [ 'error', 2 ],
  'quotes': [ 'warn', 'single' ],
  'linebreak-style': [ 'error', 'unix' ],
  'semi': [ 'error', 'always' ],
  'no-unused-vars': [ 'warn', 'all' ],
  'valid-typeof': 'error',
  'no-loop-func': 'error',
  'func-call-spacing': [ 'error', 'never' ],
  'callback-return': 'error',
  'handle-callback-err': 'error'
};

module.exports = function(customRules) {
  return Object.assign({}, defaultRules, customRules);
}
