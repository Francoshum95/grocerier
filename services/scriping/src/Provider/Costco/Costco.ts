import { PuppeteerT } from "../../Puppeteer"; 
import queryHelper from "../queryHelper";
import { COSTCO_PAPER_PASTIC } from "../../constant/costco/site";


class Costco{
  private page: PuppeteerT;

  constructor(page: PuppeteerT){
    this.page = page;
  }

  async main(){
    await this.page.page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36");
    await this.page.goToSite(COSTCO_PAPER_PASTIC);

    const categorySites = await queryHelper.costco.costcoWebsites(this.page.page);

    console.log(categorySites);
    
  }
}

export default Costco;