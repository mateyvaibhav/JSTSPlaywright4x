const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class SecureAreaPage extends BasePage {
  constructor(driver, baseUrl) {
    super(driver, baseUrl);
    this.flashMessage = By.id('flash');
    this.logoutButton = By.css('a[href="/logout"]');
    this.heading = By.css('h2');
  }

  async waitForSecureArea() {
    await this.waitForVisible(this.flashMessage);
    await this.waitForVisible(this.heading);
  }

  async getFlashMessage() {
    return this.getText(this.flashMessage);
  }

  async isLogoutVisible() {
    return this.isVisible(this.logoutButton);
  }

  async logout() {
    await this.click(this.logoutButton);
  }
}

module.exports = SecureAreaPage;
