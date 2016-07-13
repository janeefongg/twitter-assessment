// Slow down protract test - stackoverflow
var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

// Tests
describe('Twitter Assessment', function() {
  it('should retrieve tweets with from a twitter username input', function() {
    browser.get('http://localhost:8080');
    
    var usernameInput = element(by.model('dashboard.name'));
    
    usernameInput.sendKeys('nodejs').click();

  });
});