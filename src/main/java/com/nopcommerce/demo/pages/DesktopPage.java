package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DesktopPage extends Utility {
    private static final Logger log= LogManager.getLogger(DesktopPage.class.getName());
    public DesktopPage(){
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//h1[normalize-space()='Desktops']")
    WebElement desktopText;

    @FindBy(xpath = "//h2[@class='product-title']//a[normalize-space()='Build your own computer']")
    WebElement buildYourOwnComputer;

    public void verifyDesktopText(String expectedMessage){
        log.info("verifying desktop text :"+ desktopText.toString());
        verifyElements(desktopText,expectedMessage,"Verifying desktop text");
    }

    public void clickOnBuildYourOwnComputer(){
        log.info("click on build your computer : "+buildYourOwnComputer.toString());
        clickOnElement(buildYourOwnComputer);
    }

}
