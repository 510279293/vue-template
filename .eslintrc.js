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
    "no-alert": 2,
    "no-dupe-keys": 2, //对象中不允许出现重复的键
    "no-irregular-whitespace": 2, //不允许出现不规则的空格
    "no-eval": 2, //不允许使用eval()
    "no-multi-spaces": 2, //不允许出现多余的空格
    "vars-on-top": 1, //var必须放在作用域顶部
    "no-undef": 2, //不允许未声明的变量
    "camelcase": [2, {"properties": "never"}], //强制驼峰命名规则
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}], //对象字面量中冒号的前后空格
    "newline-after-var": 0, //变量声明后必须空一行
    "no-multiple-empty-lines": [2, {"max": 2}], //空行最多不能超过两行
    "no-trailing-spaces": 2, //一行最后不允许有空格
    "padded-blocks": [2, "never"], //块内行首行尾是否空行
    "no-var": 1, //使用let和const代替var
    "vue/no-unused-components": ["error", {
      "ignoreWhenBindingPresent": true
    }],
    "vue/attribute-hyphenation": ["error", "always", {
      "ignore": []
    }],
    "vue/component-name-in-template-casing": ["error", "kebab-case", {
      "ignores": []
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "always"
    }],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/html-quotes": ["error", "double"],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 3,
        "allowFirstLine": true
      }
    }],
    "vue/multiline-html-element-content-newline": ["error", {
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea"]
    }],
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/name-property-casing": [1, "kebab-case"],
    "vue/no-multi-spaces": ["error", {
      "ignoreProperties": false
    }],
    "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
    "vue/no-template-shadow": ["error"],
    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/require-default-prop": ["error"],
    "vue/v-bind-style": ["error", "shorthand"],
    "vue/v-on-style": ["error", "shorthand"],
    "vue/this-in-template": ["error", "never"]
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
