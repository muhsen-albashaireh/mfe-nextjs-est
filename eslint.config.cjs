const js = require('@eslint/js');
const nx = require('@nx/eslint-plugin');
const { FlatCompat } = require('@eslint/eslintrc');
const { fixupConfigRules } = require('@eslint/compat');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/javascript'],
  ...nx.configs['flat/typescript'],
  ...fixupConfigRules(compat.extends('next')),
  ...fixupConfigRules(compat.extends('next/core-web-vitals')),
  {
    ignores: ['dist/**/*', '**/.next/**/*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    // Override or add rules here
    rules: {
      'no-console': 'error',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
];
