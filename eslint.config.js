import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactDom from "eslint-plugin-react-dom";
import reactX from "eslint-plugin-react-x";
import { defineConfig } from "eslint/config";

export default defineConfig([
    { ignores: ["dist/**", "node_modules/**", ".idea/**", "eslint.config.js"] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["src/**/*.{ts,tsx}"],
        extends: [
            reactX.configs["recommended-typescript"],
            reactDom.configs.recommended,
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        settings: { react: { version: "19.0" } },
    },
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
]);
