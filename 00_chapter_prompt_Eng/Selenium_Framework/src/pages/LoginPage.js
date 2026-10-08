const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(driver, baseUrl) {
    super(driver, baseUrl);
    this.usernameInput = By.id('username');
    this.passwordInput = By.id('password');
    this.loginButton = By.css('button[type="submit"]');
    this.flashMessage = By.id('flash');
  }

  async login(username, password) {
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getErrorMessage() {
    return this.getText(this.flashMessage);
  }
}

module.exports = LoginPage;
