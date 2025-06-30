// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: 'e2e',
  timeout: 30 * 1000,
  retries: 1,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    baseURL: 'http://localhost:8080'
  },
  webServer: {
    command: 'npm run preview',
    port: 8080,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI
  }
};

module.exports = config;
