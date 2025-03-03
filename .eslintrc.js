module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/export': 'error',
    'import/no-unused-modules': [
      'error',
      {
        unusedExports: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
