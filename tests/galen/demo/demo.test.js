load("init.js");
load("page-objects/galen/demo/demo.js");
testOnAllDevices("Login page", "/", function (driver, device) {

    var loginPage = null;

    logged("Basic layout check", function () {
        var welcomePage = new welcome(driver).waitForIt();
        welcomePage.loginButton.click();

        loginPage = new demo(driver).waitForIt();

        checkLayout(driver, "specs/demo/demo.gspec", device.tags);
    });

    logged("Checking error box", function () {
        loginPage.username.typeText("qweqwe");
        loginPage.loginButton.click();
        loginPage.errorMessage.waitToBeShown();

        checkLayout(driver, "specs/loginPage-withErrorMessage.gspec", device.tags);
    });

});