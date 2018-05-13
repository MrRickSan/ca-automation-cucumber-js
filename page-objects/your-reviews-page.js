/* global element, by, helper */
class YourReviewsPage {
  constructor () {
    this.status = element(by.css('td.status'))
    this.reviewListed = element(by.css('.table > tbody:nth-child(3) > tr:nth-child(1)'))
  }

  getStatusText () {
    return helper.getText(this.status)
  }

  clickReviewItem () {
    return helper.click(this.reviewListed)
  }
}

module.exports = new YourReviewsPage()
