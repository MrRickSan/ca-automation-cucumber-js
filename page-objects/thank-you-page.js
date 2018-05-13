/* global element, by, helper */
class ThankYouPage {
  constructor () {
    this.confirmYourEmailMsg = element(by.css('.offset1 > section:nth-child(1) > h3:nth-child(3)'))
    this.resendConfirmationLink = element(by.css('.offset1 > section:nth-child(1) > p:nth-child(5) > a:nth-child(3)'))
    this.continueReviewBtn = function (btnText) {
      return element(by.cssContainingText('.btn', btnText))
    }
    this.yourReviewsLink = function (linkText) {
      return element(by.cssContainingText('.entry > p:nth-child(5) > a:nth-child(1)', linkText))
    }
  }

  confirmYourEmailMsgDisplayed () {
    return helper.isDisplayed(this.confirmYourEmailMsg)
  }

  getResendConfirmationLinkText () {
    return helper.getText(this.resendConfirmationLink)
  }

  clickContinueReviewBtn (btnText) {
    return helper.click(this.continueReviewBtn(btnText))
  }

  clickYourReviewsLink (linkText) {
    return helper.click(this.yourReviewsLink(linkText))
  }
}

module.exports = new ThankYouPage()
