module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/eslint-config-typescript",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-empty-function": "off",
        "vue/no-unused-vars": "off",
        "prettier/prettier": "off",
        "vue/valid-v-slot": [
            "error",
            {
                allowModifiers: true
            }
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
        "no-irregular-whitespace": "off",
        "vue/no-mutating-props": "off"
    }
};
