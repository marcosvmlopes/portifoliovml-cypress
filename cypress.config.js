const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "viewportWidth": 1440,
    "viewportHeight": 900,
    "baseUrl": "https://apps.nulab.com/signin",
    "chromeWebSecurity": false,
    "experimentalSessionAndOrigin": true
  },
});
