import { defineConfig } from "cypress";

/***************************************************************************************************
Cypress supports both JSON and JavaScript formats. While JSON is a common choice, using JavaScript
format (cypress.config.js or cypress.config.ts) provides more flexibility and allows you to write 
dynamic configurations if needed. In TypeScript projects, it is recommended to use JavaScript format
for the configuration files becasue Cypress provides official type declaration for TypeScript, allowing
you to write tests in TypeScript and have type checking for youyr configuration files as well.
***************************************************************************************************/

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    video: true,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    supportFile: false
  },
});
