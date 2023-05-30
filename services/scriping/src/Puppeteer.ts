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
  private attemp: number;

  constructor(){
    this.page = null;
    this.browser = null;
    this.attemp = 0; 
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

    while(true){
      try {
        await this.page.goto(site, {
          waitUntil: "load",
          timeout: 10000,
        });
        break;
      }catch(error){
        console.log(`timeout: attemp:${this.attemp} ...`)
        if (this.attemp >= 10){
          break;
        }

        this.page.reload();
        this.attemp += 1;
      }

    }
  }

  

}

export default Puppeteer;