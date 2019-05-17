this.LoginPage = $page("Login page", {
  email: "input#user_login",
  password: "input#user_pass",
  submitButton: "input#wp-submit",

  login: function (userName, password) {
    this.email.typeText(userName);
    this.password.typeText(password);
    this.submitButton.click();
  }
});
