module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['error', { code: 200 }],
    'linebreak-style': [0, 'error', 'windows'],
    'no-control-regex': 0,
    'vue/require-valid-default-prop': 0,
    'promise/no-promise-in-callback': 0,
    indent: 0,
    'prefer-rest-params': 0,
    'vue/no-v-html': 0,
    'promise/always-return': 0,
    'promise/catch-or-return': 0,
    "no-extra-semi": 2,
    "no-alert": 0,
    camelcase: 1
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 7,
    sourceType: 'module'
  },
  parser: "vue-eslint-parser",
  extends: ['eslint:recommended',],
  plugins: ['vue']
};
