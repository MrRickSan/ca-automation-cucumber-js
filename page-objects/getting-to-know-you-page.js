/* global element, by, helper */

class GettingToKnowYouPage {
  constructor () {
    this.done = element(by.css('input.btn'))
    this.dontLikeCustomContent = function (linkText) {
      return element(by.linkText(linkText))
    }
  }

  doneBtnDisplayed () {
    return this.done.getAttribute('value')
  }

  clickDontLikeCustomContent (linkText) {
    return helper.click(this.dontLikeCustomContent(linkText))
  }
}

module.exports = new GettingToKnowYouPage()
