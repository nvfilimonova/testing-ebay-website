import { test, expect, Locator } from '@playwright/test';

test('Nataly test', async ({page})=>{
  const button = 'input[value="Search"]';
  await page.goto('https://www.ebay.co.uk/n/all-categories/')
  await expect(page.locator(button)).toBeVisible();
  await page.locator(button).click
})



