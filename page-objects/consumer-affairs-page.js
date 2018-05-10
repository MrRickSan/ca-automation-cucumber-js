/* global element, browser, by, helper, protractor */
class ConsumerAffairPage {
  constructor () {
    this.writeReview = element(by.css('.ca-hdr__review-btn'))
  }

  get () {
    return browser.get('/')
  }
}

module.exports = new ConsumerAffairPage()
