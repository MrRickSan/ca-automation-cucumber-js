@consumer-affairs
Feature: Test consumer affairs web page
  This feature will perform some tests for new users registration and write a review with success
  
  Background:
  Given I start at "https://www.consumeraffairs.com/" page

  @ca-register-user-and-write-a-review
  Scenario: Write a review creating account with success
    When I click on the Write a Review link at the top of the page
    Then I should be taken to a page titled "Write a Review" with a heading of "Let's get started"
    When I click on the Create account button
    Then I should be taken to a page titled "Create your account" with a heading of "Create your account"
    When I fill out the form using a random test email and password and click "Continue"
    Then I should be taken to a Contact Information page with a title and heading of "Create an account"
    When I fill in the contact information form
    And I click on "Create account"
    Then I should be taken to a page titled "Getting to know you" with a heading of "Getting to know you"
    When I click on the "I don't like custom content" link under the "Done" button
    Then I should be taken to a page titled "Thanks for creating an account" with a heading of "Thank you"
    And The page content should ask to confirm the user email address with a link to "Resend confirmation"
    When I click on the button labeled "Continue with my review"
    Then I should be taken to a page titled "Submit a Review" with a heading of "Write a Review"
    When I fill out the review form and click the button labeled "Submit review"
    Then I should be taken to a page titled "Thank You" with a heading of "Thank You"
    When I click on the link labeled "Your Reviews"
    Then I should be taken to a page titled "Your Reviews" with a heading of "Your Reviews"
    And I should see my review listed with a status of "waiting - MODERATION TEAM"
    When I click on the review listed
    Then I should be taken to page with title "Review Details - " Your Reviewed Company: Your Review Title
    And I should be able to see my full review text under a heading of "Review History" on the right side of the page
