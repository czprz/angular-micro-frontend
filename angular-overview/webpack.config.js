const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "overview",

  exposes: {
    "./Module": "./projects/overview/src/lib/overview.module.ts",
  },

  shared: {
    "@angular/core": { singleton: true, strictVersion: true },
    "@angular/common": { singleton: true, strictVersion: true },
    "@angular/router": { singleton: true, strictVersion: true },
    "@chart.js/chart.js": { singleton: true, strictVersion: true },
  },
});
