import { PuppeteerT } from "../../Puppeteer";
import queryHelper from "../queryHelper/";
import writeToJson from "../writeToJson";

import {baseUrl, LOBLAWS_SITE} from '../../constant/loblaws/site';
import { LOBLAWS } from '../../constant/common';

class Loblaws{
  private page: PuppeteerT;
  
  constructor(page:PuppeteerT) {
    this.page = page
  }

  async main(){

    for(let k=0; LOBLAWS_SITE.length > k; k ++){
      await this.page.goToSite(LOBLAWS_SITE[k]);
      const categorySites = await queryHelper.loblaws.loblawsWebsites(this.page.page);

      for (let i=0; categorySites.length > i; i++){
       await this.page.goToSite(`${baseUrl}${categorySites[i].url}`);
       const subCategorySites = await queryHelper.loblaws.loblawsWebsites(this.page.page);
  
       for (let j=0; subCategorySites.length > j; j++){
         await queryHelper.loblaws.loblawsButton(this.page.page);
         const data = await queryHelper.loblaws.loblawsData(this.page.page);
         writeToJson(LOBLAWS, subCategorySites[j].title, data);
       }
      }
    }
  }
}

export default Loblaws;