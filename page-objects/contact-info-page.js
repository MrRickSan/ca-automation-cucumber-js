/* global element, browser, by, helper, protractor */
class ContactInfoPage {
  constructor () {
    this.firstName = element(by.id('id_first_name'))
    this.lastName = element(by.id('id_last_name'))
    this.phone = element(by.id('id_phone'))
    this.address = element(by.id('id_address'))
    this.address2 = element(by.id('id_address2'))
    this.city = element(by.id('id_city'))
    this.zip = element(by.id('id_zip'))
    this.country = element(by.css('#id_country > option:nth-child(2)'))
    this.newsletter = element(by.id('id_newsletter'))

    this.state = function (state) {
      return element(by.id('id_state')).element(by.cssContainingText('option', state))
    }
  }

  inputFirstName (firstName) {
    return helper.sendKeys(this.firstName, firstName)
  }

  inputLastName (lastName) {
    return helper.sendKeys(this.lastName, lastName)
  }

  inputPhone (phone) {
    return helper.sendKeys(this.phone, phone)
  }

  inputAddress (address) {
    return helper.sendKeys(this.address, address)
  }

  inputAddress2 (address2) {
    return helper.sendKeys(this.address2, address2)
  }

  inputCity (city) {
    return helper.sendKeys(this.city, city)
  }

  selectState (state) {
    return helper.click(this.state(state))
  }

  inputZip (zip) {
    return helper.sendKeys(this.zip, zip)
  }

  selectCountry () {
    return helper.click(this.country)
  }

  clickNewsLetter () {
    return helper.click(this.newsletter)
  }
}

module.exports = new ContactInfoPage()
