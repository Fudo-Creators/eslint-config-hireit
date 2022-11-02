/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ["eslint:recommended"],
  plugins: ["simple-import-sort", "import"],
  rules: {
    // Possible Errors
    // https://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    "no-template-curly-in-string": "error",
    "no-use-before-define": ["error", { functions: false }],
    // Suggestions
    // https://eslint.org/docs/rules/#suggestions
    // ---------------------------------------------
    "accessor-pairs": "error",
    "object-shorthand": [`error`, `always`, { avoidQuotes: true }],
    "arrow-body-style": ["error", "as-needed"],
    camelcase: "error",
    curly: "error",
    eqeqeq: ["error", "always"],
    "no-alert": "error",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "no-nested-ternary": "error",
    "no-return-assign": "error",
    "no-shadow": ["error", { hoist: "all" }],
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    radix: "error",
    strict: ["error", "global"],
    // Layout & Formatting
    // https://eslint.org/docs/rules/#layout-formatting
    // ---------------------------------------------
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
