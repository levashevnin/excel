module.exports = {
    parserOptions: {
        babelOptions: {
            configFile: './babel.config.json'
        },
        sourceType: 'module'
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
        'linebreak-style': ['error', 'windows']
    }
}
