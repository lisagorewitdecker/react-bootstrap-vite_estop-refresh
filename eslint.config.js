import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
    { ignores: ["dist/**", "node_modules/**", ".idea/**", "eslint.config.js"] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["src/**/*.{ts,tsx}"],
        plugins: { react: pluginReact },
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
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            "react/jsx-uses-react": "off",
        }
    },
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
]);
