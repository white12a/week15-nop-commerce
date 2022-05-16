package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ComputerSteps {
    @When("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().clickOnComputerTab();
    }


    @Then("^I should navigate and verify computer text \"([^\"]*)\"$")
    public void iShouldNavigateAndVerifyComputerText(String message) {
        new ComputerPage().VerifyComputerText(message);
    }

    @And("^I click on desktop link$")
    public void iClickOnDesktopLink() {
        new ComputerPage().clickOnDesktopLink();
    }

    @Then("^I should navigate and verify desktop text \"([^\"]*)\"$")
    public void iShouldNavigateAndVerifyDesktopText(String message) {
        new DesktopPage().verifyDesktopText(message);
    }

    @And("^I click on build your own computer$")
    public void iClickOnBuildYourOwnComputer() {
        new DesktopPage().clickOnBuildYourOwnComputer();
    }

    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor) {
        new BuildYourOwnComputerPage().selectProcessorFromDropDown(processor);
    }

    @And("^I select Ram \"([^\"]*)\"$")
    public void iSelectRam(String ram) {
        new BuildYourOwnComputerPage().selectRamFromDropDown(ram);
    }

    @And("^I select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String hdd) {
        new BuildYourOwnComputerPage().selectHDD(hdd);
    }

    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String oS) {
        new BuildYourOwnComputerPage().selectOS(oS);
    }

    @And("^I select software \"([^\"]*)\"$")
    public void iSelectSoftware(String software) {
        new BuildYourOwnComputerPage().selectSoftware(software);
    }

    @And("^I click add to cart button$")
    public void iClickAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I should verify message \"([^\"]*)\"$")
    public void iShouldVerifyMessage(String message) {
        new BuildYourOwnComputerPage().verifyProductAddedToCart(message);
    }
}
