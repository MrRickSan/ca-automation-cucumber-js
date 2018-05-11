/* global expect, browser, require, module */
const ContactInfoPage = require('../page-objects/contact-info-page')
const BasePage = require('../page-objects/base-page')
const faker = require('faker')

var contactInfoPageSteps = function () {
  'use strict'

  this.Then(/^I should be taken to a Contact Information page with a title and heading of "([^"]*)"$/, function (heading) {
    return expect(BasePage.getPageHeading()).to.eventually.equal(heading)
  })

  this.When(/^I fill in the contact information form$/, function (heading) {
    ContactInfoPage.inputFirstName(faker.name.firstName())
    ContactInfoPage.inputLastName(faker.name.lastName())
    ContactInfoPage.inputPhone(faker.phone.phoneNumber())
    ContactInfoPage.inputAddress(faker.address.streetName())
    ContactInfoPage.inputAddress2(faker.address.secondaryAddress())
    ContactInfoPage.inputCity(faker.address.city())
    ContactInfoPage.selectState(faker.address.state())
    ContactInfoPage.inputZip(faker.address.zipCode())
    ContactInfoPage.selectCountry()
    ContactInfoPage.clickNewsLetter()
  })

  this.Then(/^I click on "([^"]*)"$/, function (btnName) {
    return expect(BasePage.clickSubmitBtn(btnName))
  })
}

module.exports = contactInfoPageSteps
