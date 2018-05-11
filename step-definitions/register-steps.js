/* global expect, browser, require, module */
const RegisterPage = require('../page-objects/register-page')
const BasePage = require('../page-objects/base-page')
const faker = require('faker')

var RegisterPageSteps = function () {
  'use strict'

  this.When(/^I fill out the form using a random test email and password and click Continue$/, function () {
    let email = faker.internet.email().toLowerCase()
    let password = faker.internet.password()
    RegisterPage.inputEmail(email)
    RegisterPage.inputEmailConfirm(email)
    RegisterPage.inputPassword(password)
    RegisterPage.inputPasswordConfirm(password)
    return BasePage.clickSubmitBtn()
  })
}

module.exports = RegisterPageSteps
