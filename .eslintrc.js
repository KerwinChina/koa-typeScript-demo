module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2017, 
    sourceType: 'module'
  },
  extends: 'standard',
  plugins: [
    'html',
    'promise'
  ],
  env: {
    'node': true
  },
  rules: {
    // allow console
    'no-console': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': 0
  },
  
}
