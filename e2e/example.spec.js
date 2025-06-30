const { test, expect } = require('@playwright/test');

test('should display main header', async ({ page }) => {
  await page.goto('/');
  const header = await page.locator('h1');
  await expect(header).toHaveText('Hello React 16');
});
