const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    fixturesFolder: false,
    setupNodeEvents: false,
    supportFile: false,
  },
})
