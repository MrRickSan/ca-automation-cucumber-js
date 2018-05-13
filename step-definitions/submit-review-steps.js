/* global require, module, helper */
const submitReviewPage = require('../page-objects/submit-review-page')

var SubmitReviewSteps = function () {
  'use strict'

  this.When(/^I fill out the review form and click the button labeled "([^"]*)"$/, function (btnText) {
    var fakeData = helper.createFakeReview()
    submitReviewPage.inputOrgName(fakeData.companyName)
    global.companyName = fakeData.companyName
    submitReviewPage.inputProduct(fakeData.product)
    submitReviewPage.selectRatingFiveStars()
    submitReviewPage.inputReviewSubject(fakeData.subject)
    global.subject = fakeData.subject
    submitReviewPage.inputReviewDescription(fakeData.description)
    global.description = fakeData.description
    submitReviewPage.clickReviewCheckBox()
    submitReviewPage.clickSubmitReview(btnText)
  })
}

module.exports = SubmitReviewSteps
