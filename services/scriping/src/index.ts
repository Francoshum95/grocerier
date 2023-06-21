import Puppeteer from "./Puppeteer";
import { Loblaws, NoFrills, Costco } from "./Provider";

const main = async() => {
  const page = new Puppeteer();
  await page.initial();

  // await new Loblaws(page).main();
  // await new NoFrills(page).main();
  await new Costco(page).main();

  page.browser.close();
  
};

main();