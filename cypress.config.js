const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "projectId": "qu4yqa",
    "viewportWidth": 1440,
    "viewportHeight": 900,
    "baseUrl": "https://apps.nulab.com/signin",
    "chromeWebSecurity": false,
    "experimentalSessionAndOrigin": true
  },
});
