load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");
load("../../../page-objects/galen/dashboard/dashboardPage.js");
load("../../../page-objects/galen/media/mediaPage.js");

testOnDevice("desktop", "Media", "/wp-login.php", function (driver, device) {
    var loginPage = null; 
    var dashboardPage = null;
    var mediaPage = null;

    logged("Verify that all of elements in Add New Media display correctly ", function () {
        loginPage = new LoginPage(driver).waitForIt();
        loginPage.login('admin', '123456789');
        dashboardPage = new DashboardPage(driver).waitForIt();
        dashboardPage.goToPage("Add New Media");
        mediaPage = new MediaPage(driver).waitForIt();
        checkLayout(driver, "specs/media/mediaPage.gspec", device.tags);
    });
});