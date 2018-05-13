/* globals browser, protractor */
const faker = require('faker')

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

  // receives a locator and return the text from it
  this.getText = function (locator) {
    browser.wait(protractor.ExpectedConditions.visibilityOf(locator), waitTime)
    return locator.getText()
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

  this.createFakeContactInfo = function () {
    let fakeData = {}
    fakeData.firstName = faker.name.firstName()
    fakeData.lastName = faker.name.lastName()
    fakeData.phone = faker.phone.phoneNumberFormat()
    fakeData.streetName = faker.address.streetName()
    fakeData.secondaryAddress = faker.address.secondaryAddress()
    fakeData.zipCode = faker.address.zipCode()
    fakeData.city = faker.address.city()
    return fakeData
  }

  this.createFakeReview = function () {
    let fakeData = {}
    fakeData.companyName = faker.company.companyName()
    fakeData.product = faker.commerce.product()
    fakeData.subject = faker.lorem.sentence(5)
    fakeData.description = faker.lorem.paragraph(10)
    return fakeData
  }
}

module.exports = new Helper()
