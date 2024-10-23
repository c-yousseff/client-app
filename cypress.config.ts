import { defineConfig } from 'cypress';

export default defineConfig({
  // Your existing Cypress configuration
  // Ensure that the integration folder aligns with your project structure
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'src/test/javascript/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/test/javascript/cypress/support/index.ts',
  },
});
