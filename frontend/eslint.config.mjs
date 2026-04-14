// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import jsxa11y from "eslint-plugin-jsx-a11y";
import nextPlugin from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "next-env.d.ts",
      "src/app/favicon.ico",
    ],
  },
  {
    files: [".storybook/main.ts"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
  },
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        // This is crucial for TypeScript rules to work
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "@typescript-eslint": tsPlugin,
      "jsx-a11y": jsxa11y,
    },
    rules: {
      // 1. Manually spread rules to avoid circular objects
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...tsPlugin.configs.recommended.rules,
      ...jsxa11y.flatConfigs.recommended.rules,

      // --- ARCHITECTURAL CONSTRAINTS ---
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["useEffect"],
              message: "Move logic to the core layer or use Server Actions.",
            },
          ],
        },
      ],

      // --- REACT 19 & ARCHITECTURE ---
      // "react-hooks/rules-of-hooks": "error",
      // "react-hooks/exhaustive-deps": "warn",

      // --- OVERRIDES ---
      "jsx-a11y/label-has-associated-control": ["error", { assert: "both" }],
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/tabindex-no-positive": "error",
      "jsx-a11y/role-has-required-aria-props": "error",

      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      "jsx-a11y/no-noninteractive-tabindex": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
      "jsx-a11y/media-has-caption": "warn",
      "jsx-a11y/mouse-events-have-key-events": "warn",
      "jsx-a11y/no-redundant-roles": "warn",

      // --- SONARQUBE & CLEAN CODE ---
      complexity: ["error", { max: 10 }],
      "max-depth": ["error", 3],
      "max-lines-per-function": ["warn", { max: 250, skipBlankLines: true }],
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // --- TYPESCRIPT STRICTNESS (Guru Level) ---
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  ...storybook.configs["flat/recommended"],
];

export default eslintConfig;
