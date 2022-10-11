module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  settings: {
    'import/resolver': {
      alias: [
        ['middleware', './functions/middleware']
      ]
    }
  },
  rules: {
    "no-unused-vars": "warn",
  },
};
