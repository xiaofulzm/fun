module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    "vue/html-self-closing": ["error", {
        "html": {
        "void": "any",
        "normal": "any",
        "component": "any"
        }
    }],
    "skipBlankLines": 0,
    "ignoreComments": 0,
    'vue/multi-word-component-names': 0 // 屏蔽驼峰命名
  }
}
