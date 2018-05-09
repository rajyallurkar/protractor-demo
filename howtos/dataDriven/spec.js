describe('slow calculator', function() {
  var firstNum = element(by.model('first'));
  var secondNum = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var result = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  all(require('./testData.json'), (data, iteration) => {
    it('should pass a normal test', function() {
      firstNum.sendKeys(data.input_1);
      secondNum.sendKeys(data.input_2);
      goButton.click();
      expect(result.getText()).toEqual(data.expectedOutput);
    });
  })
  
});
