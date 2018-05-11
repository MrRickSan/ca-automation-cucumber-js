/* global expect, browser, require, module */
const HomePage = require('../page-objects/home-page')
const BasePage = require('../page-objects/base-page')

var HomePageSteps = function () {
  'use strict'

  this.Given(/^I start at "([^"]*)" page$/, async function (url) {
    await browser.driver.manage().deleteAllCookies()
    await browser.refresh()
    return BasePage.get(url)
  })

  this.When(/^I click on the Write a Review link at the top of the page$/, function () {
    return HomePage.clickWriteReview()
  })
}

module.exports = HomePageSteps
