import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents() {
            // implement node event listeners here
        },
        specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    },
});
