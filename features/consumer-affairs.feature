@consumer-affairs
Feature: Test consumer affairs web page
  This feature will test the create a account for newcomers and write a review with success
  #Bug [Critical?] Na tela de Contact Information ao voltar para review permite usuáro escrever um review sem preencher suas informações

  Background:
  Given I start at "https://www.consumeraffairs.com/" page

  @ca-writeReview
  Scenario: Write a review creating account with success
    When I click on the Write a Review link at the top of the page
    Then I should be taken to a page titled "Write a Review" with a heading of "Let's get started"
    When I click on the Create account button
    Then I should be taken to a page titled "Create your account" with a heading of "Create your account"
    When I fill out the form using a random test email and password and click Continue
    Then I should be taken to a Contact Information page with a title and heading of "Create an account"
