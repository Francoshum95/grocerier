import { PuppeteerT } from "../../Puppeteer";
import queryHelper from "../queryHelper/";
import writeToJson from "../writeToJson";

import * as site from '../../constant/loblaws/site';
import * as constant from '../../constant/common';

class Loblaws{
  private page: PuppeteerT;
  
  constructor(page:PuppeteerT) {
    this.page = page
  }

  async main(){

    for(let k=0; site.LOBLAWS.length > k; k ++){
      await this.page.goToSite(site.LOBLAWS[k]);
      const categorySites = await queryHelper.loblaws.selectWebsite(this.page.page);

      for (let i=0; categorySites.length > i; i++){
       await this.page.goToSite(`${site.baseUrl}${categorySites[i].url}`);
       const subCategorySites = await queryHelper.loblaws.selectWebsite(this.page.page);
  
       for (let j=0; subCategorySites.length > j; j++){
         await queryHelper.loblaws.selectButton(this.page.page);
         const data = await queryHelper.loblaws.selectData(this.page.page);
         writeToJson(constant.LOBLAWS, subCategorySites[j].title, data);
       }
      }
    }
  }
}

export default Loblaws;