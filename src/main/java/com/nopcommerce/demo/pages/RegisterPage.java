package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.Random;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Register']")
    WebElement registerText;

    @CacheLookup
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement registerButton;

    @CacheLookup
    @FindBy(xpath = "//span[@class='male']")
    WebElement maleRadio;

    @CacheLookup
    @FindBy(xpath = "//span[@class='female']")
    WebElement femaleRadio;

    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement firstName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastName;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement birthDayDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement birthMonthDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement birthYearDropDown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement email;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement confirmPassword;

    @CacheLookup
    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement firstNameRequiredErrorMessage;

    @CacheLookup
    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement lastNameRequiredErrorMessage;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement emailIsRequiredErrorMessage;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement passwordIsRequiredErrorMessage;

    @CacheLookup
    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement confirmationPasswordErrorMessage;

    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement registrationCompleteMessage;

    public void verifyRegisterText(){
        verifyElements(registerText,"Register","Verify register text");
      // boolean b= verifyThatTextIsDisplayed(registerText,"Register");
    }
    public void clickOnRegisterButton(){
        clickOnElement(registerButton);
    }
    public void verifyErrorMessageFirstNameIsRequired(String expectedMessage){
        log.info("verify firstname is required error message :"+ firstNameRequiredErrorMessage.toString());
        verifyElements(firstNameRequiredErrorMessage,expectedMessage,"verify first name error message");
    }
    public void verifyErrorMessageLastNameIsRequired(String expectedMessage){
        log.info("verifying lastname is required error message :"+ lastNameRequiredErrorMessage.toString());
        verifyElements(lastNameRequiredErrorMessage,expectedMessage,"verifying lastname is required error message ");
    }
    public void verifyErrorMessageEmailIsRequired(String expectedMessage){
        log.info("verifying email is required error message :"+emailIsRequiredErrorMessage.toString());
        verifyElements(emailIsRequiredErrorMessage,expectedMessage,"Verifying email is required error message");

    }
    public void verifyErrorMessagePasswordIsRequired(String expectedMessage){
        log.info("verifying password is required error message :"+passwordIsRequiredErrorMessage.toString());
        verifyElements(passwordIsRequiredErrorMessage,expectedMessage,"Verifying password is required error message");

    }
    public void verifyErrorMessageConfirmedPasswordIsRequired(String expectedMessage){
        log.info("verifying confirmed password is required error message :"+confirmationPasswordErrorMessage.toString());
        verifyElements(confirmationPasswordErrorMessage,expectedMessage,"Verifying confirmed password is required error message");

    }
    public void selectGender(String gender){
        if(gender.equalsIgnoreCase("male")){
            clickOnElement(maleRadio);
        }else if (gender.equalsIgnoreCase("female")){
            clickOnElement(femaleRadio);
        }else{
            System.out.println("select gender");
        }
        log.info("select Gender : "+gender);
    }
    public void enterFirstName(String fName){
        sendTextToElement(firstName,fName);
        log.info("Enter first name : "+firstName.toString());
    }
    public void enterLastName(String lName){
        sendTextToElement(lastName,lName);
        log.info("Enter last name : "+lastName.toString());
    }
    String name;
    public void enterEmailAddress(String email1){
        Random randomGenerator = new Random();
        int randomInt = randomGenerator.nextInt(1000);
        sendTextToElement(email,"username" + randomInt + "@gmail.com");
        System.out.println("username" + randomInt + "@gmail.com" );
        email1="username" + randomInt + "@gmail.com";
        log.info("Enter email address : "+email.toString());
    }
    public void selectDateOfBirth(String date){
        selectByVisibleTextFromDropDown(birthDayDropDown,date);
        log.info("select date of birth : "+birthDayDropDown.toString());
    }
    public void selectMonthOfBirth(String month){
        selectByVisibleTextFromDropDown(birthMonthDropDown,month);
        log.info("Select month of birth : "+birthMonthDropDown.toString());
    }
    public void selectYearOfBirth(String year){
        selectByVisibleTextFromDropDown(birthYearDropDown,year);
        log.info("select year of birth : "+birthYearDropDown.toString());
    }
    public void enterPassword(String  password1){
        sendTextToElement(password,password1);
        log.info("Enter password : "+password.toString());
    }
    public void enterConfirmedPassword(String cPassword){
        sendTextToElement(confirmPassword,cPassword);
        log.info("Enter confirmed password : "+confirmPassword.toString());
    }
    public void verifyRegistrationMessage(String expectedMessage){
        verifyElements(registrationCompleteMessage,expectedMessage,"verifying registration complete message");
        log.info("verify registration message : "+registrationCompleteMessage.toString());
    }



}

