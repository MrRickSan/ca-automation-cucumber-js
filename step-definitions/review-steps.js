/* global expect, browser, require, module */
const ReviewPage = require('../page-objects/review-page')
const BasePage = require('../page-objects/base-page')

var ReviewPageSteps = function () {
  'use strict'

  this.Then(/^I should be taken to a page titled "([^"]*)" with a heading of "([^"]*)"$/, async function (title, heading) {
    await expect(browser.getTitle()).to.eventually.equal(title)
    return expect(BasePage.getPageHeading()).to.eventually.equal(heading)
  })

  this.When(/^I click on the Create account button$/, function () {
    return ReviewPage.clickCreateAcc()
  })
}

module.exports = ReviewPageSteps
