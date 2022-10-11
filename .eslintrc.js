module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  plugins: ['import', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/no-redeclare': 0,
    'import/extensions': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
  },
};
