/* global expect, require, module, helper */
const contactInfoPage = require('../page-objects/contact-info-page')
const basePage = require('../page-objects/base-page')

var ContactInfoPageSteps = function () {
  'use strict'

  this.Then(/^I should be taken to a Contact Information page with a title and heading of "([^"]*)"$/, function (heading) {
    return expect(basePage.getPageHeading()).to.eventually.equal(heading)
  })

  this.When(/^I fill in the contact information form$/, function () {
    var data = helper.createFakeContactInfo()
    contactInfoPage.inputFirstName(data.firstName)
    contactInfoPage.inputLastName(data.lastName)
    contactInfoPage.inputPhone(data.phone)
    contactInfoPage.inputAddress(data.streetName)
    contactInfoPage.inputAddress2(data.secondaryAddress)
    contactInfoPage.inputZip(data.zipCode)
    contactInfoPage.selectCountry()
    contactInfoPage.inputCity(data.city)
    contactInfoPage.clickNewsLetter()
  })

  this.Then(/^I click on "([^"]*)"$/, function (btnName) {
    expect(basePage.clickSubmitBtn(btnName))
  })
}

module.exports = ContactInfoPageSteps
