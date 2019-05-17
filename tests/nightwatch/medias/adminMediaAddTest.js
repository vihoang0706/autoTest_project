var addMediaPage, dashboardPage, loginPage, username, password, imageName = 'girl';
var image = '../../../../images/girl.jpg';
module.exports = {
    tags: ['add-media'],
    before: function (browser) {
        loginPage = browser.page.adminUserLoginPage();
        dashboardPage = browser.page.adminBasePage();
        addMediaPage = browser.page.adminMediaAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        loginPage.login(username, password);
    },
    'Verify that admin can add new image': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Add New Media');
            addMediaPage.addNewMedia(image);
            addMediaPage.getImageName(function (actualImageName) {
                browser.assert.equal(actualImageName, imageName);
            });
            addMediaPage.deleteImage();
            done();
        });
    }
}