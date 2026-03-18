export default {
    root: true,
    env: {
        browser: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', '@vue/eslint-config-prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
}
