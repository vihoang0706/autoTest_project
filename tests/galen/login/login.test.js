load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");

testOnAllDevices("Login page", "/wp-login.php", function (driver, device) {
    var loginPage = null;
    logged("Basic layout Login check", function(){
        loginPage = new LoginPage(driver).waitForIt();
        checkLayout(driver, "specs/login/loginPage.gspec", device.tags);
        loginPage.login('admin', '123456789');
    })
});