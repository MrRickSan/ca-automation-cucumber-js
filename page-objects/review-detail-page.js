/* global element, by, helper */
class ReviewDetailPage {
  constructor () {
    this.reviewHistory = element(by.css('.responses-container > h4:nth-child(1)'))
    this.fullReviewText = element(by.css('.response > section:nth-child(3) > p:nth-child(1)'))
  }

  getReviewHistoryHeading () {
    return helper.getText(this.reviewHistory)
  }

  getFullReviewText () {
    return helper.getText(this.fullReviewText)
  }
}

module.exports = new ReviewDetailPage()
