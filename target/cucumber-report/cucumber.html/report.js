$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3335288200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to computer page successfully",
  "description": "",
  "id": "computer-test;user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity,"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate and verify computer text \"Computers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 75140300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 460986000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 44
    }
  ],
  "location": "ComputerSteps.iShouldNavigateAndVerifyComputerText(String)"
});
formatter.result({
  "duration": 44804400,
  "status": "passed"
});
formatter.after({
  "duration": 656663200,
  "status": "passed"
});
formatter.before({
  "duration": 2470190800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should navigate to desktop page sucessfully",
  "description": "",
  "id": "computer-test;user-should-navigate-to-desktop-page-sucessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke,"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should navigate and verify desktop text \"Desktops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 18300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 487268700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 422986800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 43
    }
  ],
  "location": "ComputerSteps.iShouldNavigateAndVerifyDesktopText(String)"
});
formatter.result({
  "duration": 34168600,
  "status": "passed"
});
formatter.after({
  "duration": 633740500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "`User should build your own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;`user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "computer-test;`user-should-build-your-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 30,
      "id": "computer-test;`user-should-build-your-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 31,
      "id": "computer-test;`user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 32,
      "id": "computer-test;`user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 33,
      "id": "computer-test;`user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2675416700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "`User should build your own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;`user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 511175000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 463352600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 741768700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 72552100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 60452300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 46762300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 46548600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 45633100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickAddToCartButton()"
});
formatter.result({
  "duration": 39600400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iShouldVerifyMessage(String)"
});
formatter.result({
  "duration": 890713600,
  "status": "passed"
});
formatter.after({
  "duration": 643311100,
  "status": "passed"
});
formatter.before({
  "duration": 1678193900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "`User should build your own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;`user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 557054700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 403402800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 694906200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 56434800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 63318900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 51890400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 44335300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 40016800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickAddToCartButton()"
});
formatter.result({
  "duration": 43090600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iShouldVerifyMessage(String)"
});
formatter.result({
  "duration": 276261000,
  "status": "passed"
});
formatter.after({
  "duration": 681666700,
  "status": "passed"
});
formatter.before({
  "duration": 1877646300,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "`User should build your own computer and add them to cart successfully",
  "description": "",
  "id": "computer-test;`user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 510059000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 431605700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 729688900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 52012900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 53101900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 51233800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 44173300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 42935800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickAddToCartButton()"
});
formatter.result({
  "duration": 46114800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iShouldVerifyMessage(String)"
});
formatter.result({
  "duration": 275520700,
  "status": "passed"
});
formatter.after({
  "duration": 672966600,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1775491400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User to navigate to login page successfully",
  "description": "",
  "id": "login-test;user-to-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 475647500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 26839200,
  "status": "passed"
});
formatter.after({
  "duration": 635619200,
  "status": "passed"
});
formatter.before({
  "duration": 1844796400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@smoke,"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"primefivetest@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 424322600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "primefivetest@yahoo.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 58000200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 56805500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 356725000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 13900,
  "status": "passed"
});
formatter.after({
  "duration": 646894300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@smoke,"
    },
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the error message\"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "error message"
      ],
      "line": 29,
      "id": "login-test;verify-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 30,
      "id": "login-test;verify-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 31,
      "id": "login-test;verify-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 32,
      "id": "login-test;verify-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2596365300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    },
    {
      "line": 19,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the error message\"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 426769400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 52686800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 53239900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 371887100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 31
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 22678900,
  "status": "passed"
});
formatter.after({
  "duration": 655629800,
  "status": "passed"
});
formatter.before({
  "duration": 1872046800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    },
    {
      "line": 19,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the error message\"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 428378300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 54754200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 54065400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 377010300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 31
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 24465100,
  "status": "passed"
});
formatter.after({
  "duration": 633682400,
  "status": "passed"
});
formatter.before({
  "duration": 1809475300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    },
    {
      "line": 19,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the error message\"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 428199900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 59055900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 62447700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 377874900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 31
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 26517700,
  "status": "passed"
});
formatter.after({
  "duration": 649732200,
  "status": "passed"
});
formatter.before({
  "duration": 2433721900,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User should logout successfully",
  "description": "",
  "id": "login-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I enter email \"bb12@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should verify login link display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 433905300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bb12@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 56896000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 58223800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 626740600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 587267200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeVerifyLoginLinkDisplay()"
});
formatter.result({
  "duration": 32093600,
  "status": "passed"
});
formatter.after({
  "duration": 654876500,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "As user I would like to register in to nopcommerce website",
  "id": "register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2560947600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I should navigate to register page successfully",
  "description": "",
  "id": "register;i-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should verify register text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 484186900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPage()"
});
formatter.result({
  "duration": 21400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldVerifyRegisterText()"
});
formatter.result({
  "duration": 24688100,
  "status": "passed"
});
formatter.after({
  "duration": 673132400,
  "status": "passed"
});
formatter.before({
  "duration": 1738768800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "I should verify the FirstName LastName Email Password And ConfirmPassword Fields are mandatory",
  "description": "",
  "id": "register;i-should-verify-the-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity,"
    },
    {
      "line": 11,
      "name": "@smoke,"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to register Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should verify first name is required \"First name is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should verify last name is required \"Last name is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should verify email is required \"Email is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should verify password is required \"Password is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should verify confirmed Password is required \"Password is required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 436895400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPage()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 54661900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.iShouldVerifyFirstNameIsRequired(String)"
});
formatter.result({
  "duration": 29829200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 39
    }
  ],
  "location": "RegisterSteps.iShouldVerifyLastNameIsRequired(String)"
});
formatter.result({
  "duration": 23479800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iShouldVerifyEmailIsRequired(String)"
});
formatter.result({
  "duration": 24419900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 38
    }
  ],
  "location": "RegisterSteps.iShouldVerifyPasswordIsRequire(String)"
});
formatter.result({
  "duration": 25100200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 48
    }
  ],
  "location": "RegisterSteps.iShouldVerifyConfirmedPasswordIsRequire(String)"
});
formatter.result({
  "duration": 23628800,
  "status": "passed"
});
formatter.after({
  "duration": 649130700,
  "status": "passed"
});
formatter.before({
  "duration": 2499721000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "I should able create account successfully",
  "description": "",
  "id": "register;i-should-able-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@smoke,"
    },
    {
      "line": 23,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should navigate to register Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select gender \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Enter first name \"Alex\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Enter last name \"pop\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select birth day \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select birth month \"May\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select birth year \"1999\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter email address \"email\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter Password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter confirmed password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should navigate and verify registration complete \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 440376700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPage()"
});
formatter.result({
  "duration": 14500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 46971000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alex",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 88665000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pop",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 71113500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iSelectBirthDay(String)"
});
formatter.result({
  "duration": 65442800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iSelectBirthMonth(String)"
});
formatter.result({
  "duration": 58448500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1999",
      "offset": 21
    }
  ],
  "location": "RegisterSteps.iSelectBirthYear(String)"
});
formatter.result({
  "duration": 60464600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 70474900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 60108600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.iEnterConfirmedPassword(String)"
});
formatter.result({
  "duration": 62309700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 682077200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 52
    }
  ],
  "location": "RegisterSteps.iShouldNavigateAndVerifyRegistrationComplete(String)"
});
formatter.result({
  "duration": 24700000,
  "status": "passed"
});
formatter.after({
  "duration": 671595000,
  "status": "passed"
});
});