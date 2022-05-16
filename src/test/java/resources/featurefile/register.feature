Feature: Register
  As user I would like to register in to nopcommerce website

  @sanity, @regression
  Scenario: I should navigate to register page successfully
  Given I am on homepage
  When I click on register link
  And I should navigate to register Page
  Then I should verify register text

  @sanity, @smoke, @regression
  Scenario: I should verify the FirstName LastName Email Password And ConfirmPassword Fields are mandatory
  Given I am on homepage
  When I click on register link
  And I should navigate to register Page
  And I click on register button
  And I should verify first name is required "First name is required."
  And I should verify last name is required "Last name is required."
  And I should verify email is required "Email is required."
  And I should verify password is required "Password is required."
  Then I should verify confirmed Password is required "Password is required."

  @smoke, @regression
  Scenario: I should able create account successfully
  Given I am on homepage
  When I click on register link
  And I should navigate to register Page
  And I select gender "Female"
  And I Enter first name "Alex"
  And I Enter last name "pop"
  And I select birth day "1"
  And I select birth month "May"
  And I select birth year "1999"
  And I enter email address "email"
  And I enter Password "123456"
  And I enter confirmed password "123456"
  And I click on register button
  Then I should navigate and verify registration complete "Your registration completed"






#
#  Scenario: User should create account successfully
#    Given I am on homepage
#    When I click on register link
#    And I enters following users details
#      | Jay  | Vaghani    | jay@gmail.com  | 07878451263 | Harrow |
#      | Amit | Kathrotiya | amit@gmail.com | 07878451285 | Luton  |
#      | Aum  | Vaghani    | aum@gmail.com  | 07878454585 | Harrow |
#    Then registration successful