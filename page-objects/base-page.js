/* global element, browser, by, helper */
class BasePage {
  constructor () {
    this.headingText = element(by.tagName('h1'))

    this.submitBtn = function (btnName) {
      return element(by.cssContainingText('.submit-btn', btnName))
    }
  }

  get (url) {
    return browser.get(url)
  }

  getPageHeading () {
    return helper.getText(this.headingText)
  }

  clickSubmitBtn (btnName) {
    return helper.click(this.submitBtn(btnName))
  }
}

module.exports = new BasePage()
