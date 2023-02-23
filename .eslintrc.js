// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: 'vue-eslint-parser',
    extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        // - 规则的错误等级
        // - 0 off 关闭规则
        // - 1 warn 启用规则，作为警告
        // - 2 error 启用规则，作为错误
        'prettier/prettier': 2,
        'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
        'array-bracket-spacing': 2,
        'no-var': 2,
        'no-eval': 2,
        'arrow-spacing': 2,
        'block-spacing': 2,
        'key-spacing': 2,
        'brace-style': 2,
        'vue/camelcase': 2,
        'vue/require-component-is': 0,
        'vue/require-default-prop': 0,
        'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
        'object-curly-spacing': [2, 'always'],
        'vue/singleline-html-element-content-newline': 0,
        'vue/html-closing-bracket-newline': [
            2,
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        'vue/no-v-model-argument': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/max-attributes-per-line': 0,
        'vue/html-self-closing': [
            2,
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
    },
}
