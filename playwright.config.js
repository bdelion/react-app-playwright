// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: 'e2e',            // Dossier où se trouvent les tests E2E Playwright
  timeout: 30 * 1000,        // Timeout global par test (30 secondes)
  retries: 1,                // Nombre de retry en cas d’échec
  reporter: [
    ['list'],
    ['junit', { outputFile: 'playwright-report/junit.xml' }],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    baseURL: 'http://localhost:8080',
  },
  webServer: {
    command: 'npm run preview',
    port: 8080,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI
  }
};

module.exports = config;
