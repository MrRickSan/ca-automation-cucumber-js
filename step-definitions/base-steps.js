/* global expect, browser, require, module */
const basePage = require('../page-objects/base-page')

var BaseSteps = function () {
  'use strict'

  this.Then(/^I should be taken to a page titled "([^"]*)" with a heading of "([^"]*)"$/, async function (title, heading) {
    await expect(browser.getTitle()).to.eventually.equal(title)
    return expect(basePage.getPageHeading()).to.eventually.equal(heading)
  })
}

module.exports = BaseSteps
