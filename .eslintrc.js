/* eslint-disable global-require */
module.exports = {
  extends: 'eslint-config-ns-ts',
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],
    /**
     * Allow console logs as we have no client-side app, only a nodejs server
     */
    'no-console': 0,
    /**
     * Configured in tsconfig.json instead
     */
    '@typescript-eslint/explicit-module-boundary-types': 0,
    /**
     * e.g. allow extending DefaultRootState and other vendor interfaces
     */
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.stories.ts', '*.stories.tsx'],
      rules: {
        // disable because we use supertest
        'jest/no-done-callback': 0,
        // disable because we use supertest
        'jest/expect-expect': 0,
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.json'],
      },
      typescript: {},
    },
  },
}
