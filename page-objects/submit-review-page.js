/* global element, by, helper */
class SubmitReviewPage {
  constructor () {
    this.orgName = element(by.id('id_org-name'))
    this.product = element(by.id('id_org-company_contact'))
    this.ratingFive = element(by.css('div.ui-stars-star:nth-child(5)'))
    this.reviewSubject = element(by.id('id_review_text-subject'))
    this.reviewDescription = element(by.id('id_review_text-description'))
    this.reviewCheckBox = element(by.id('id_review-solicited_review'))
    this.submitReviewBtn = function (btnText) {
      return element(by.buttonText(btnText))
    }
  }

  inputOrgName (orgName) {
    return helper.sendKeys(this.orgName, orgName)
  }

  inputProduct (product) {
    return helper.sendKeys(this.product, product)
  }

  selectRatingFiveStars () {
    return helper.click(this.ratingFive)
  }

  inputReviewSubject (subject) {
    return helper.sendKeys(this.reviewSubject, subject)
  }

  inputReviewDescription (description) {
    return helper.sendKeys(this.reviewDescription, description)
  }

  clickReviewCheckBox () {
    return helper.click(this.reviewCheckBox)
  }

  clickSubmitReview (btnText) {
    return helper.click(this.submitReviewBtn(btnText))
  }
}

module.exports = new SubmitReviewPage()
