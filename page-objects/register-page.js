/* global element, browser, by, helper, protractor */
class RegisterPage {
  constructor () {
    this.emailInput = element(by.id('id_email'))
    this.emailConfirmInput = element(by.id('id_email2'))
    this.passwordInput = element(by.id('id_password1'))
    this.passwordConfirmInput = element(by.id('id_password2'))
  }

  inputEmail (email) {
    return helper.sendKeys(this.emailInput, email)
  }

  inputEmailConfirm (email) {
    return helper.sendKeys(this.emailConfirmInput, email)
  }

  inputPassword (password) {
    return helper.sendKeys(this.passwordInput, password)
  }

  inputPasswordConfirm (password) {
    return helper.sendKeys(this.passwordConfirmInput, password)
  }
}

module.exports = new RegisterPage()
