/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: [
    'hireit/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error'],
    '@typescript-eslint/no-useless-empty-export': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
