import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-var": "error", // Disallow the use of 'var'
      "no-unused-vars": "error", // Disallow unused variables
      semi: ["error", "always"], // Require semicolons at the end of statements
      "no-console": "warn", // Warn if 'console.log' is left in the code
    },
  },
]);
