const { By, until } = require('selenium-webdriver');
const config = require('../config');

class BasePage {
  constructor(driver, baseUrl = config.baseUrl) {
    this.driver = driver;
    this.baseUrl = baseUrl;
    this.timeout = config.timeout;
  }

  async open(path = '/') {
    const url = new URL(path, this.baseUrl).toString();
    await this.driver.get(url);
    await this.waitForPageReady();
  }

  async waitForPageReady() {
    await this.driver.wait(async () => {
      const state = await this.driver.executeScript('return document.readyState');
      return state === 'complete';
    }, this.timeout);
  }

  async find(locator) {
    return this.driver.wait(until.elementLocated(locator), this.timeout);
  }

  async waitForVisible(locator, timeout = this.timeout) {
    const element = await this.driver.wait(until.elementLocated(locator), timeout);
    await this.driver.wait(until.elementIsVisible(element), timeout);
    return element;
  }

  async type(locator, value) {
    const element = await this.waitForVisible(locator);
    await element.clear();
    await element.sendKeys(value);
  }

  async click(locator) {
    const element = await this.waitForVisible(locator);
    await element.click();
  }

  async getText(locator) {
    const element = await this.waitForVisible(locator);
    return element.getText();
  }

  async isVisible(locator) {
    try {
      await this.waitForVisible(locator, 2000);
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = BasePage;
