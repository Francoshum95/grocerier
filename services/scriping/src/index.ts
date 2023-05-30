const fs = require('fs');

import Puppeteer from "./Puppeteer";
import { Loblaws } from "./Provider";

const main = async() => {
  const page = new Puppeteer();
  await page.initial();

  const LoblawsData = await new Loblaws(page).main();

  const jsonData = JSON.stringify(LoblawsData, null, 2);

  fs.writeFile('data.json', jsonData, (err:any) => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('JSON file has been written successfully.');
    }
  });

  page.browser.close();
  
};

main();