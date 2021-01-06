module.exports =  {
  parser:  '@typescript-eslint/parser',
  plugins: ["@typescript-eslint", "prettier"],
  extends:  [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
 parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
    '@typescript-eslint/explicit-function-return-type': "off",
  },
};