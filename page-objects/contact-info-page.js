/* global element, browser, by, helper, protractor */
class ContactInfoPage {
  constructor () {
    this.firstName = element(by.id('id_first_name'))
    this.lastName = element(by.id('id_last_name'))
    this.phone = element(by.id('id_phone'))
    this.address = element(by.id('id_address'))
    this.address2 = element(by.id('id_address2'))
    this.city = element(by.id('id_city'))
    this.state = element(by.id('id_state'))
    this.zip = element(by.id('id_zip'))
    this.country = element(by.id('id_country'))
  }
}

module.exports = new ContactInfoPage()
