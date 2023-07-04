require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    project: "./tsconfig.json",
    sourceType: "module"
  },
  settings: {
    react: {
      "version": "detect",
    }
  }
}
