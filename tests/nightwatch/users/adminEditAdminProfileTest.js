const firstName = 'Hoàng';
const lastName = 'Vi';
const nickName = 'administrator';
const description = 'I am final year student at Passerellesnumeriques Viet Nam, with major is Testing and Software Development';
const linkWebsite = 'http://pnvteam1.com';
const messageProfileUpdated = 'Profile updated.';
var userProfilePage, dashboardPage, loginPage;
module.exports = {
    '@tags': 'edit-admin-profile',
    before: (browser) => {
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        loginPage = browser.page.adminUserLoginPage();
        dashboardPage = browser.page.adminBasePage();
        userProfilePage = browser.page.adminUserEditProfilePage();
        loginPage.login(username, password);
    },
    'Verify that Admin can edit the profile of admin successfully': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Edit User Profile');
            userProfilePage.setDefaultCheckboxes();
            dashboardPage.goToPage('Edit User Profile');
            userProfilePage.updateUserProfile(firstName, lastName, nickName, linkWebsite, description);
            userProfilePage.isCheckboxesSelected(function (result) {
                browser.assert.equal(result, true);
            });
            userProfilePage.getMessageSuccessfully(function (actualMessage) {
                browser.assert.equal(actualMessage, messageProfileUpdated);
            });
            dashboardPage.goToPage('Edit User Profile');
            userProfilePage.getActualValue('Actual First Name', function (actualFirstName) {
                browser.assert.equal(actualFirstName, firstName);
            });
            userProfilePage.getActualValue('Actual Last Name', function (actualLastName) {
                browser.assert.equal(actualLastName, lastName);
            });
            userProfilePage.getActualValue('Actual Nick Name', function (actualNickName) {
                browser.assert.equal(actualNickName, nickName);
            });
            userProfilePage.getActualValue('Actual Website', function (actualLinkWebsite) {
                browser.assert.equal(actualLinkWebsite, linkWebsite);
            });
            userProfilePage.getActualValue('Actual Description', function (actualDescription) {
                browser.assert.equal(actualDescription, description);
            });
            done();
        });
    }
};