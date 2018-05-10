/* globals browser, protractor */

function Helper () {
  var waitTime = 30000

  this.waitTime = function () {
    return waitTime
  }

  // receives a locator and click on it
  this.click = function (locator) {
    browser.wait(protractor.ExpectedConditions.visibilityOf(locator), waitTime)
    locator.click()
  }

  // receives a locator and the input data and write the input data
  this.sendKeys = function (locator, data) {
    browser.wait(protractor.ExpectedConditions.visibilityOf(locator), waitTime)
    locator.clear()
    locator.sendKeys(data)
  }

  // receives a locator and return true if the element is being displayed
  this.isDisplayed = function (locator) {
    browser.wait(protractor.ExpectedConditions.visibilityOf(locator), waitTime)
    return locator.isDisplayed()
  }

  // receives a locator of a textfield element and clear it
  this.clear = function (locator) {
    browser.wait(protractor.ExpectedConditions.visibilityOf(locator), waitTime)
    locator.clear()
  }
}

module.exports = new Helper()
