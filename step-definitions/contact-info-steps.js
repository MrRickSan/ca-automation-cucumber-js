/* global expect, browser, require, module */
const ContactInfoPage = require('../page-objects/contact-info-page')
const BasePage = require('../page-objects/base-page')
const faker = require('faker')

var contactInfoPageSteps = function () {
  'use strict'

  this.Then(/^I should be taken to a Contact Information page with a title and heading of "([^"]*)"$/, function (heading) {
    return expect(BasePage.getPageHeading()).to.eventually.equal(heading)
  })
}

module.exports = contactInfoPageSteps
