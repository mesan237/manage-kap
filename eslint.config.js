const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const prettier = require("eslint-plugin-prettier");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    extends: compat.extends("expo", "prettier"),

    plugins: {
        prettier,
    },

    rules: {
        "react-native/no-inline-styles": "error",
        "prettier/prettier": "warn",
    },
}, globalIgnores([".expo", "**/node_modules", "**/.eslintrc.js"])]);