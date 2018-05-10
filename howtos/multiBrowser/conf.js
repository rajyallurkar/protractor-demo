// Tests for the calculator.
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

const seleniumAddress = process.env.E2E_SELENIUM_ADDRESS || 'http://localhost:4444/wd/hub';

exports.config = {
  directConnect: false,
  maxSessions: 1,
  seleniumAddress: seleniumAddress,
  baseUrl: 'http://localhost:8888',

  specs: [
    'spec.js'
  ],

  framework: 'jasmine2',

  multiCapabilities: [
    {
        browserName: 'firefox'
    },
    {
        browserName: 'chrome'
    }],
    
    onPrepare: function() {
      return browser.getCapabilities().then(function(caps) {
          var name = caps.get('browserName')
          jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
              savePath: './reports-multi-browser/' + name
          }));
      });
    }
};
