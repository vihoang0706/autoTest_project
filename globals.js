const path = require('path');
var userNames = {
  username: 'admin',
  password: '123456789',
};
const HtmlReporter = require('@rpii/nightwatch-html-reporter');
const htmlReporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + '/reports/nightwatch',               
    uniqueFilename: true,
    customTheme:'html-reporter.html'
});
module.exports = {
  userNames: userNames,
  paths: {
    data: path.resolve(__dirname, './data/data.csv')
  },
  "reporter" : htmlReporter.fn,
  beforeEach: async function (browser, done) {
    browser
      .maximizeWindow()
      .url('http://192.168.189.70/wordpress/wp-login.php');
    browser.perform(function () {
      done();
    });
    htmlReporter.setBrowserOptions( browser.options);
  },
  afterEach: function (browser,done) {
    browser.end(function () {
      done();
    });
  },
};
