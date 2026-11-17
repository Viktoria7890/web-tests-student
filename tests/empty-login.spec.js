import { test, expect } from '@playwright/test';

test('пустая форма входа показывает ошибки «Email обязателен» и «Пароль обязателен»', async ({ page }) => {

  await page.goto('/');

  await page.locator('[data-marker="login-button-desktop"]').click();

  await page.locator('[data-marker="login-submit-button"]').click();

  await expect(page.locator('[data-marker="email-error"]')).toHaveText('Email обязателен');

  await expect(page.locator('[data-marker="password-error"]')).toHaveText('Пароль обязателен');
});