require('dotenv').config();

module.exports = {
  baseUrl: process.env.BASE_URL || 'https://the-internet.herokuapp.com',
  browser: process.env.BROWSER || 'chrome',
  isHeadless: process.env.HEADLESS !== 'false',
  timeout: Number(process.env.TIMEOUT || 10000),
  users: {
    validUsername: 'tomsmith',
    validPassword: 'SuperSecretPassword!',
    invalidUsername: 'invalid-user',
    invalidPassword: 'wrong-password'
  }
};
