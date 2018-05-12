/* global require, module */
const reviewPage = require('../page-objects/review-page')

var ReviewPageSteps = function () {
  'use strict'

  this.When(/^I click on the Create account button$/, function () {
    return reviewPage.clickCreateAcc()
  })
}

module.exports = ReviewPageSteps
