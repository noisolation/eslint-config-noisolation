module.exports = {
    'rules': {
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-unused-vars': [
            'warn',
            'all'
        ],
        'no-console': [ 1 ],
        'valid-typeof': 'error',
        'no-loop-func': 'error',
        'callback-return': 'error',
        'handle-callback-err': 'error',
        'no-multiple-empty-lines': [ 'warn', { 'max': 2 } ]
    },
    'env': {
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended'
};
