module.exports = {
  parser: "@typescript-eslint/parser",
  rules: {
    quotes: [2, "single", { avoidEscape: true }],
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  extends: [
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
    extraFileExtensions: ["ts", "tsx"],
  },
};
