/* global require, module, expect */
const thankYouPage = require('../page-objects/thank-you-page')

var ThankYouSteps = function () {
  'use strict'

  this.Then(/^The page content should ask to confirm the user email address with a link to "([^"]*)"$/, function (linkText) {
    thankYouPage.confirmYourEmailMsgDisplayed()
    expect(thankYouPage.getResendConfirmationLinkText()).to.eventually.equal(linkText)
  })

  this.When(/^I click on the button labeled "([^"]*)"$/, function (btnText) {
    thankYouPage.clickContinueReviewBtn(btnText)
  })

  this.When(/^I click on the link labeled "([^"]*)"$/, function (linkText) {
    thankYouPage.clickYourReviewsLink(linkText)
  })
}

module.exports = ThankYouSteps
