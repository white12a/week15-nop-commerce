package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterSteps {
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @And("^I should navigate to register Page$")
    public void iShouldNavigateToRegisterPage() {
    }

    @Then("^I should verify register text$")
    public void iShouldVerifyRegisterText() {
        new RegisterPage().verifyRegisterText();
    }


    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @And("^I should verify first name is required \"([^\"]*)\"$")
    public void iShouldVerifyFirstNameIsRequired(String errorMessage) {
        new RegisterPage().verifyErrorMessageFirstNameIsRequired(errorMessage);
    }

    @And("^I should verify last name is required \"([^\"]*)\"$")
    public void iShouldVerifyLastNameIsRequired(String errorMessage) {
        new RegisterPage().verifyErrorMessageLastNameIsRequired(errorMessage);
    }

    @And("^I should verify email is required \"([^\"]*)\"$")
    public void iShouldVerifyEmailIsRequired(String errorMessage) {
        new RegisterPage().verifyErrorMessageEmailIsRequired(errorMessage);
    }

    @And("^I should verify password is required \"([^\"]*)\"$")
    public void iShouldVerifyPasswordIsRequire(String errorMessage) {
        new RegisterPage().verifyErrorMessagePasswordIsRequired(errorMessage);
    }

    @Then("^I should verify confirmed Password is required \"([^\"]*)\"$")
    public void iShouldVerifyConfirmedPasswordIsRequire(String errorMessage) {
        new RegisterPage().verifyErrorMessageConfirmedPasswordIsRequired(errorMessage);
    }

    @And("^I select gender \"([^\"]*)\"$")
    public void iSelectGender(String gender)  {
    new RegisterPage().selectGender(gender);
    }

    @And("^I Enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String fName)  {
        new RegisterPage().enterFirstName(fName);
    }

    @And("^I Enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lName)  {
        new RegisterPage().enterLastName(lName);
    }

    @And("^I select birth day \"([^\"]*)\"$")
    public void iSelectBirthDay(String date)  {
        new RegisterPage().selectDateOfBirth(date);
    }

    @And("^I select birth month \"([^\"]*)\"$")
    public void iSelectBirthMonth(String month)  {
        new RegisterPage().selectMonthOfBirth(month);
    }

    @And("^I select birth year \"([^\"]*)\"$")
    public void iSelectBirthYear(String year)  {
        new RegisterPage().selectYearOfBirth(year);
    }

    @And("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String password1)  {
        new RegisterPage().enterPassword(password1);
    }

    @And("^I enter confirmed password \"([^\"]*)\"$")
    public void iEnterConfirmedPassword(String cPassword)  {
        new RegisterPage().enterConfirmedPassword(cPassword);
    }

    @Then("^I should navigate and verify registration complete \"([^\"]*)\"$")
    public void iShouldNavigateAndVerifyRegistrationComplete(String message)  {
    new RegisterPage().verifyRegistrationMessage(message);
    }

    @And("^I enter email address \"([^\"]*)\"$")
    public void iEnterEmailAddress(String email)  {
       new RegisterPage().enterEmailAddress(email);
    }
}
