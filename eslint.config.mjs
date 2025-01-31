// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

// rever
export default tseslint.config(
  {
    ignores: [
      "./node_modules/*", 
      "./dist/**/*",
      "eslint.config.mjs",
      "jest.config.js",
      "jest-html-reporters-attach"
    ]
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  prettierConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      }
    }
  },
  {
    files: ['**/*.js', 'tests/*'],
    extends: [tseslint.configs.disableTypeChecked]
  },
  eslintPluginPrettierRecommended
);
