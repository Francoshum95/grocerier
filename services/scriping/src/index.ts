import Puppeteer from "./Puppeteer";
import { Loblaws } from "./Provider";

const main = async() => {
  const page = new Puppeteer();
  await page.initial();

  await new Loblaws(page).main();

  page.browser.close();
  
};

main();