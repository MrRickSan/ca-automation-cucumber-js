/* global element, browser, by, helper, protractor */
class BasePage {
  constructor () {
    this.headingText = element(by.tagName('h1'))
    this.submitBtn = element(by.css('.submit-btn'))
  }

  get (url) {
    return browser.get(url)
  }

  getPageHeading () {
    return helper.getText(this.headingText)
  }

  clickSubmitBtn () {
    return helper.click(this.submitBtn)
  }
}

module.exports = new BasePage()
