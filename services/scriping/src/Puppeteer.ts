import puppeteer, { Browser, Page } from "puppeteer";
import { VIEW_POINT } from "./constant/common";

export interface PuppeteerT {
  page: Page | null;
  browser: Browser | null;
  initial(): Promise<void>;
  goToSite(site: string): Promise<void>;
}

class Puppeteer implements Puppeteer{
  public page: Page;
  public browser: Browser;

  constructor(){
    this.page = null;
    this.browser = null; 
  }

  public async initial(){
    this.browser = await puppeteer.launch({
      headless: true
    });

    const page = await this.browser.newPage();
    await page.setViewport(VIEW_POINT);

    this.page = page;
  };
  
  public async goToSite(site: string){
    await this.page.goto(site, {
      waitUntil: "load",
      timeout: 10000,
    });
  }
}

export default Puppeteer;