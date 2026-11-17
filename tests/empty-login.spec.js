import { test, expect } from '@playwright/test';

test('пустая форма входа показывает ошибки «Email обязателен» и «Пароль обязателен»', async ({ page }) => {
  // 1. Открываем главную Testboard (baseURL берётся из playwright.config.js)
  await page.goto('/');

  // 2. Открываем попап «Вход и Регистрация»
  await page.locator('[data-marker="login-button-desktop"]').click();

  // 3. Отправляем пустую форму
  await page.locator('[data-marker="login-submit-button"]').click();

  // 4. Проверяем сообщение под полем Email
  await expect(page.locator('[data-marker="email-error"]')).toHaveText('Email обязателен');

  // 5. Проверяем сообщение под полем пароля
  await expect(page.locator('[data-marker="password-error"]')).toHaveText('Пароль обязателен');
});