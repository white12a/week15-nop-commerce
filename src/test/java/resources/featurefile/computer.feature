Feature: Computer Test

  @sanity, @regression
  Scenario: User should navigate to computer page successfully
    Given I am on homepage
    When I click on computer tab
    Then I should navigate and verify computer text "Computers"

  @smoke, @regression
  Scenario: User should navigate to desktop page sucessfully
    Given I am on homepage
    When I click on computer tab
    And I click on desktop link
    Then I should navigate and verify desktop text "Desktops"
  @regression
  Scenario Outline: `User should build your own computer and add them to cart successfully
    Given I am on homepage
    When I click on computer tab
    And I click on desktop link
    And I click on build your own computer
    And I select processor "<processor>"
    And I select Ram "<ram>"
    And I select HDD "<hdd>"
    And I select OS "<os>"
    And I select software "<software>"
    And I click add to cart button
    Then I should verify message "The product has been added to your shopping cart"

    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |





