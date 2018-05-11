/* global element, browser, by, helper, protractor */
class ReviewPage {
  constructor () {
    this.createAccBtn = element(by.css(
      '.verify_selection > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)'
    ))
  }

  clickCreateAcc () {
    return helper.click(this.createAccBtn)
  }
}

module.exports = new ReviewPage()
