/* global require, module, expect, browser, companyName, subject, description */
const reviewDetailPage = require('../page-objects/review-detail-page')

var YourReviewsSteps = function () {
  'use strict'

  this.Then(/^I should be taken to page with title "([^"]*)" Your Reviewed Company: Your Review Title$/, function (pageTitle) {
    expect(browser.getTitle()).to.eventually.equal(pageTitle + companyName + ': ' + subject)
  })

  this.Then(/^I should be able to see my full review text under a heading of "([^"]*)" on the right side of the page$/, function (heading) {
    expect(reviewDetailPage.getReviewHistoryHeading()).to.eventually.equal(heading)
    expect(reviewDetailPage.getFullReviewText()).to.eventually.equal(description)
  })
}

module.exports = YourReviewsSteps
