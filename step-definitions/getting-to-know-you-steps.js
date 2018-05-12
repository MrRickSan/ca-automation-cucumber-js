/* global expect, require, module */
const getKnowYouPage = require('../page-objects/getting-to-know-you-page')

var GettingToKnowYouPageSteps = function () {
  'use strict'

  this.When(/^I click on the "([^"]*)" link under the "([^"]*)" button$/, function (link, btnName) {
    expect(getKnowYouPage.doneBtnDisplayed()).to.eventually.equal(btnName)
    return getKnowYouPage.clickDontLikeCustomContent(link)
  })
}

module.exports = GettingToKnowYouPageSteps
