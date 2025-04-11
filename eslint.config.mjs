import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
    stylistic.configs.customize({
        indent: 4,
        semi: true,
        quotes: "double",
    }),
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: {
            js,
            "@stylistic": stylistic,
        },
        languageOptions: {
            globals: globals.node,
        },
        extends: ["js/recommended"],
        rules: {
            // Possible Problems
            "no-undef": "off",
            "no-irregular-whitespace": "off",
            "no-unused-vars": ["warn", { args: "none" }],
            "no-loss-of-precision": "warn",

            // Suggestions
            "no-sequences": "error",
            "prefer-const": "error",
            "no-var": "error",
            "eqeqeq": "warn",

            // Stylistic rules
            "@stylistic/array-bracket-newline": "error",
            "@stylistic/max-statements-per-line": "warn",
        },
    },
]);
