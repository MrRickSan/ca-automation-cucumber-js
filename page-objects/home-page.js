/* global element, browser, by, helper, protractor */
class HomePage {
  constructor () {
    this.writeReview = element(by.css('.ca-hdr__review-btn'))
  }

  clickWriteReview () {
    return helper.click(this.writeReview)
  }
}

module.exports = new HomePage()
