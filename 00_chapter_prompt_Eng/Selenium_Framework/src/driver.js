require('chromedriver');

const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const config = require('./config');

function buildDriver() {
  const options = new chrome.Options();

  if (config.isHeadless) {
    options.addArguments(
      '--headless=new',
      '--disable-gpu',
      '--window-size=1920,1080',
      '--no-sandbox',
      '--disable-dev-shm-usage'
    );
  }

  options.addArguments('--disable-web-security');

  return new Builder()
    .forBrowser(config.browser)
    .setChromeOptions(options)
    .build();
}

module.exports = { buildDriver };
