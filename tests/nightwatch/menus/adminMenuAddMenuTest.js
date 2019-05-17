var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
const nameMenu = 'Comments' + Math.floor(Math.random() * charactersLength);
var dashboardPage, loginPage, username, password, menuPage;
module.exports = {
    '@tags': ['add-menu'],
    before: function (browser) {
        loginPage = browser.page.adminUserLoginPage();
        dashboardPage = browser.page.adminBasePage();
        menuPage = browser.page.adminMenuAddMenuPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        loginPage.login(username, password);
    },
    'Verify that admin can add new Menu with valid data': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Menu');
            menuPage.addNewMenu(nameMenu);
            menuPage.getMenuName(function (actualNameMenu) {
                browser.assert.equal(actualNameMenu, nameMenu);
            });
            menuPage.deleteMenu();
            done();
        });
    }
};