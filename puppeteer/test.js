const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ebcbcbbeccebdabbebdebccaacdfdffd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h2');
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ebcbcbbeccebdabbebdebccaacdfdffd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('p');
    console.log('TESTCASE:testcase2:success');
  }
  catch(e){
    console.log('TESTCASE:testcase2:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ebcbcbbeccebdabbebdebccaacdfdffd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('img');
    console.log('TESTCASE:testcase3:success');
  }
  catch(e){
    console.log('TESTCASE:testcase3:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

