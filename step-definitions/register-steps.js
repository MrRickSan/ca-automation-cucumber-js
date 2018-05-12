/* global require, module */
const registerPage = require('../page-objects/register-page')
const basePage = require('../page-objects/base-page')
const faker = require('faker')

var RegisterPageSteps = function () {
  'use strict'

  this.When(/^I fill out the form using a random test email and password and click "([^"]*)"/, function (btnName) {
    let email = faker.internet.email().toLowerCase()
    let password = faker.internet.password()
    registerPage.inputEmail(email)
    registerPage.inputEmailConfirm(email)
    registerPage.inputPassword(password)
    registerPage.inputPasswordConfirm(password)
    return basePage.clickSubmitBtn(btnName)
  })
}

module.exports = RegisterPageSteps
