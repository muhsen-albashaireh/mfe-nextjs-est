const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react-typescript'],
  {
    rules: {
      '@next/next/no-html-link-for-pages': ['error', 'apps/landing/pages/'],
    },
  },
];
