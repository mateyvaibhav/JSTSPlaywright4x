const { expect } = require('chai');
const { buildDriver } = require('../driver');
const config = require('../config');
const LoginPage = require('../pages/LoginPage');
const SecureAreaPage = require('../pages/SecureAreaPage');

describe('The Internet login flows', function () {
  this.timeout(60000);

  let driver;
  let loginPage;
  let secureAreaPage;

  beforeEach(async function () {
    driver = buildDriver();
    loginPage = new LoginPage(driver, config.baseUrl);
    secureAreaPage = new SecureAreaPage(driver, config.baseUrl);
    await loginPage.open('/login');
  });

  afterEach(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  it('logs in successfully with valid credentials', async function () {
    await loginPage.login(config.users.validUsername, config.users.validPassword);
    await secureAreaPage.waitForSecureArea();

    const message = await secureAreaPage.getFlashMessage();
    expect(message).to.include('You logged into a secure area!');
    expect(await secureAreaPage.isLogoutVisible()).to.equal(true);
  });

  it('shows an error for invalid credentials', async function () {
    await loginPage.login(config.users.invalidUsername, config.users.invalidPassword);

    const message = await loginPage.getErrorMessage();
    expect(message).to.include('Your username is invalid!');
  });
});
