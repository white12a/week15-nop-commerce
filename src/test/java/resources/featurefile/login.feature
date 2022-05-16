Feature: Login Test
  As user I want to login into nop commerce website

  @sanity, @regression
  Scenario: User to navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully

  @sanity,@smoke,@regression
  Scenario:  User should login successfully with valid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "primefivetest@yahoo.com"
    And I enter password "abc123"
    And I click on login button
    Then I should login successfully

  @smoke, @regression
  Scenario Outline: Verify error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message"<error message>"

    Examples:
      | email              | password | error message                                                                               |
      | abcd123@gmail.com  | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | xyz123@gmail.com   | abc123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | adfafasd@gmail.com | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |

  @regression
  Scenario: User should logout successfully
    Given I am on homepage
    When I click on login link
    And I enter email "bb12@gmail.com"
    And I enter password "123456"
    And I click on login button
    And I click on logout link
    Then I should verify login link display


