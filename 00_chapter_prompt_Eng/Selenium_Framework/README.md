# Selenium Framework

This project is a lightweight Selenium WebDriver starter framework built with JavaScript and Mocha. It follows a page object model (POM) structure and includes a working demo against the public The Internet login page.

## Understand

The goal is to create a maintainable and reusable Selenium automation framework that demonstrates:
- WebDriver setup and browser configuration
- Page object abstractions
- Reusable test data and configuration
- Positive and negative browser automation checks

## Plan

The codebase is organized as follows:
- `src/config.js` — shared configuration and environment variables
- `src/driver.js` — browser setup and Selenium driver creation
- `src/pages/` — page object classes for login-related screens
- `src/tests/` — executable automated test scenarios

## Create

The framework includes a working login flow example for:
- Successful authentication with valid credentials
- Invalid credential handling with a visible error state

## Verify

This project is validated by running the Mocha test suite after installing dependencies.

## Run locally

1. Install dependencies:
   npm install
2. Copy environment settings:
   copy .env.example .env
3. Run the tests:
   npm test

Optional headed mode:
   npm run test:headed

## Supported setup

- Node.js 18+
- Chrome browser
- Selenium WebDriver
- Mocha and Chai

## Notes

The default demo uses the public login page at https://the-internet.herokuapp.com/login. The credentials used by the example are the standard demo credentials from the app:
- Username: tomsmith
- Password: SuperSecretPassword!

## Project structure

```text
Selenium_Framework/
├── .env.example
├── .gitignore
├── README.md
├── package.json
└── src/
    ├── config.js
    ├── driver.js
    ├── pages/
    │   ├── BasePage.js
    │   ├── LoginPage.js
    │   └── SecureAreaPage.js
    └── tests/
        └── login.e2e.test.js
```
