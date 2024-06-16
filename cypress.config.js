const { defineConfig } = require('cypress')

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
baseUrl: 'https://katalon-demo-cura.herokuapp.com/',
specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'

  },
};
