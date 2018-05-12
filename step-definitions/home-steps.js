/* global browser, require, module */
const homePage = require('../page-objects/home-page')
const basePage = require('../page-objects/base-page')

var HomePageSteps = function () {
  'use strict'

  this.Given(/^I start at "([^"]*)" page$/, async function (url) {
    await browser.driver.manage().deleteAllCookies()
    await browser.refresh()
    return basePage.get(url)
  })

  this.When(/^I click on the Write a Review link at the top of the page$/, function () {
    return homePage.clickWriteReview()
  })
}

module.exports = HomePageSteps
