module.exports = {
    parserOptions: {
        babelOptions: {
            configFile: 'babel.config.json'
        },
        sourceType: 'module',
        ecmaVersion: 2022
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'google'],
    rules: {
        'semi': 'off',
        'comma-dangle': 'off',
        'indent': ['error', 4],
        'linebreak-style': ['error', 'windows'],
        'require-jsdoc': 'off',
        'eol-last': 'off',
        'quotes': 'off',
        'object-curly-spacing': 'off',
        'arrow-parens': 'off'
    }
}
