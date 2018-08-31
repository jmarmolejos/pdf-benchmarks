const puppeteer = require('puppeteer');

(async () => {
  console.time('generate_pdf')

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.example.com', {waitUntil: 'networkidle2'});

  await page.pdf({path: 'example.pdf', format: 'A4'});

  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${used} MB`);
 
  await browser.close();

  console.timeEnd('generate_pdf')
})();

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);
