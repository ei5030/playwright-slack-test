import { test, expect } from '@playwright/test';

test('盛田ホームページのトップ画面での遷移', async ({ page }) => {
  await page.goto('https://e-bag-morita.com/');

  // COMPANYをクリックして、中身を確認
  await page.getByRole('link', { name: 'COMPANY' }).first().click();
// 「会社情報」という文字の中で、最初に見つかったやつを確認して！
await expect(page.getByText('会社情報').first()).toBeVisible();

  // 他のリンクも同様に「クリック」→「確認」の順で並べるのが実践的！
  await page.getByRole('link', { name: 'BRANDS' }).first().click();
  await page.getByRole('link', { name: 'NEWS' }).first().click();
  await page.getByRole('link', { name: 'SHOP' }).first().click();
  await page.getByRole('link', { name: 'RECRUIT' }).first().click();

  // ★最後にご褒美のシャッターを切る
  await page.screenshot({ path: 'morita_success.png' });
}); // ← この「閉じ」が、すべての命令の後に来るのがルール！