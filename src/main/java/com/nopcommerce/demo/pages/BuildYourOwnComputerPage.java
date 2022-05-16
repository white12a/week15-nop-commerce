package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuildYourOwnComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//dd[1]//select[1]")
    WebElement processorTab;

    @CacheLookup
    @FindBy(xpath = "//dd[2]//select[1]")
    WebElement ramTab;

    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_3_6']")
    WebElement hdd320GB;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_7']")
    WebElement hdd400GB;

    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_4_8']")
    WebElement osVistaHome;

    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_4_9']")
    WebElement osVistaPremium;

    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_5_10']")
    WebElement softwareMSOffice;

    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_5_12']")
    WebElement softwareTotalCommander;

    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_5_11']")
    WebElement softwareAcrobatReader;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Add to cart']")
    WebElement addToCartButton;

    @CacheLookup
    @FindBy(xpath = "//p[@class='content']")
    WebElement productAddedToCartMessage;

    public void selectProcessorFromDropDown(String processor) {
        selectByVisibleTextFromDropDown(processorTab, processor);
        log.info("Select processor : " + processorTab.toString());
    }

    public void selectRamFromDropDown(String ram) {
        selectByVisibleTextFromDropDown(ramTab, ram);
        log.info("Select ram : " + ramTab.toString());
    }

    public void selectHDD(String hdd) {
        if (hdd.equalsIgnoreCase("320 GB")) {
            clickOnElement(hdd320GB);
        } else if (hdd.equalsIgnoreCase("400 GB [+$100.00]")) {
            clickOnElement(hdd400GB);
        }
        log.info("Select HDD : " + hdd);
    }

    public void selectOS(String oS) {
        if (oS.equalsIgnoreCase("Vista Home [+$50.00]")) {
            clickOnElement(osVistaHome);
        } else if (oS.equalsIgnoreCase("Vista Premium [+$60.00]")) {
            clickOnElement(osVistaPremium);
        }
    }

    public void selectSoftware(String software) {
        if (software.equalsIgnoreCase("Microsoft Office [+$50.00]")) {
            clickOnElement(softwareMSOffice);
        } else if (software.equalsIgnoreCase("Acrobat Reader [+$10.00]")) {
            clickOnElement(softwareAcrobatReader);
        } else if (software.equalsIgnoreCase("Total Commander [+$5.00]")) {
            clickOnElement(softwareTotalCommander);
        }
        log.info("select software : " + software);
    }

    public void clickOnAddToCartButton() {
        clickOnElement(addToCartButton);
    }
    public void verifyProductAddedToCart(String expectedMessage){
        verifyElements(productAddedToCartMessage,expectedMessage,"Verify product added to cart text");
    }


}
