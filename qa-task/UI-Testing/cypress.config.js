const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.paper.id',
    viewportHeight: 1200,
    viewportWidth: 1600,
    experimentalStudio: false
  },
});
