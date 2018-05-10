var helper = require('./helper.js');
const seleniumAddress = process.env.E2E_SELENIUM_ADDRESS || 'http://localhost:4444/wd/hub';


exports.config = {
  directConnect: false,
  seleniumAddress: seleniumAddress,

  specs: [
    'spec.js'
  ],

  framework: 'jasmine2',
  
  capabilities: {
    'browserName': 'firefox',
    'marionette': true,
  },
};
