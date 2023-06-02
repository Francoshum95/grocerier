import Puppeteer from "./Puppeteer";
import { Loblaws, NoFrills } from "./Provider";

const main = async() => {
  const page = new Puppeteer();
  await page.initial();

  await new Loblaws(page).main();
  await new NoFrills(page).main()

  page.browser.close();
  
};

main();