/* global expect, browser, require, module */
var ConsumerAffairPage = require('../page-objects/consumer-affairs-page')

var OpportunitySteps = function () {
  'use strict'

  this.setDefaultTimeout(6 * 1000)

  this.Given(/^I am on the consumer affairs web page$/, async function () {
    await browser.driver.manage().deleteAllCookies()
    await browser.refresh()
    return ConsumerAffairPage.get()
  })
}

module.exports = OpportunitySteps
