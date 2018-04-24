// Tests for the calculator.

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const baseUrl = 'http://localhost:3456';

exports.config = {
  directConnect: true,

  framework: 'jasmine2',
  baseUrl: baseUrl,
  specs: [
    'spec.ts'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
    require('ts-node').register({
      project: 'test/tsconfig.json'
    });
  }

};
