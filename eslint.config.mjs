import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
                React: "readonly"
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true }
            }
        },
        plugins: {
            react: pluginReact,
            "@typescript-eslint": tseslint.plugin,
            "react-hooks": pluginReactHooks
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...tseslint.configs.recommended[0].rules,
            ...pluginReact.configs.flat.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "error"
        }
    }
];