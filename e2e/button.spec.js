const { test, expect } = require('@playwright/test');

test('should respond to button click', async ({ page }) => {
  await page.goto('/');
  page.on('dialog', dialog => dialog.accept());
  await page.getByTestId('custom-button').click();
});
