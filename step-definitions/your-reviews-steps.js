/* global require, module, expect */
const yourReviewsPage = require('../page-objects/your-reviews-page')

var YourReviewsSteps = function () {
  'use strict'

  this.Then(/^I should see my review listed with a status of "([^"]*)"$/, function (statusText) {
    expect(yourReviewsPage.getStatusText()).to.eventually.equal(statusText)
  })

  this.When(/^I click on the review listed$/, function () {
    yourReviewsPage.clickReviewItem()
  })
}

module.exports = YourReviewsSteps
