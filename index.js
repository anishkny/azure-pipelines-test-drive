const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://mathworks.com');
  await page.screenshot({path: 'artifacts/example.png'});
  await browser.close();
})();
