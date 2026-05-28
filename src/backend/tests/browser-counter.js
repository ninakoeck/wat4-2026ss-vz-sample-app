import { browser } from 'k6/browser';

const BASE_URL = 'http://localhost:5000/counter'

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      vus: 10,
      iterations: 10,
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};

export default async function () {
  const page = await browser.newPage();

  try {
    await page.goto(BASE_URL);
    await page.waitForTimeout(2000);
    await page.locator('my-counter').click();
    await page.locator.getByRole('button', { name: 'Increment'}).click();
    await page.waitForTimeout(2000);
  } finally {
    await page.close();
  }
}