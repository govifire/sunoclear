require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  "ignorePatterns": ["migrations/"],
  "overrides": [
    {
      "files": ["src/index.ts"],
      "rules": {
        "no-console": "off"
      }
    },
    {
      files: ["src/entity/*.ts"],
      rules: {
        "functional/no-class": "off",
        "functional/no-this-expression": "off",
      },
    },
    {
      files: ["src/google-cloud-functions/*.ts"],
      rules: {
        "no-console": "off",
      },
    }
  ],
  "extends": [
    "merit/backend"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars-experimental": "error",
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2021,
    "project": "./tsconfig.json",
    "sourceType": "module"
  }
}
