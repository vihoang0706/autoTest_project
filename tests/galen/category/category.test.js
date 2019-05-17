load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");
load("../../../page-objects/galen/dashboard/dashboardPage.js");
load("../../../page-objects/galen/category/categoryPage.js");

testOnDevice("desktop", "Category", "/wp-login.php", function (driver, device) {
    var loginPage = null;
    var dashboardPage = null;

    logged("Verify that the category page have enough elements", function () {
        loginPage = new LoginPage(driver).waitForIt();
        loginPage.login('admin', '123456789');
        dashboardPage = new DashboardPage(driver).waitForIt();
        dashboardPage.goToPage("Category");
        checkLayout(driver, "specs/category/categoryPage.gspec", device.tags);
    });
});