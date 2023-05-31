import { PuppeteerT } from "../../Puppeteer";
import queryHelper from "../queryHelper";
import writeToJson from "../writeToJson";

import * as site from '../../constant/loblaws/site';
import * as constant from '../../constant/common';

class Loblaws{
  private page: PuppeteerT;
  
  constructor(page:PuppeteerT) {
    this.page = page
  }

  async main(){
    await this.page.goToSite(site.LOBLAWS_FRUITS_VEGETABLES);
    const fruite_vegetables = await queryHelper(this.page.page);

    writeToJson(constant.LOBLAWS, constant.CATEGORY_FRUITS_VEGETABLES, fruite_vegetables);

    await this.page.goToSite(site.LOBLAWS_DAIRY_EGGS);
    const dairy_eggs = await queryHelper(this.page.page);

    writeToJson(constant.LOBLAWS, constant.CATEGORY_DAIRY_EGGS, dairy_eggs);

    await this.page.goToSite(site.LOBLAWS_MEAT);
    const meat = await queryHelper(this.page.page);

    writeToJson(constant.LOBLAWS, constant.CATEGORY_MEAT, meat);

    await this.page.goToSite(site.LOBLAWS_BAKERY);
    const bakery = await queryHelper(this.page.page);

    writeToJson(constant.LOBLAWS, constant.CATEGORY_BAKERY, bakery);

    //// can not handle to many HTML elements
    // await this.page.goToSite(site.LOBLAWS_PANTRY);
    // const pantry = await queryHelper(this.page.page);

    // writeToJson(constant.LOBLAWS, constant.CATEGORY_PANTRY, pantry);

    await this.page.goToSite(site.LOBLAWS_HOUSEHOLD_SUPPLIES);
    const household_supplies = await queryHelper(this.page.page);

    writeToJson(constant.LOBLAWS, constant.CATEGORY_HOUSEHOLD_SUPPLIES, household_supplies);

    await this.page.goToSite(site.LOBLAWS_DRINKS);
    const drinks = await queryHelper(this.page.page);

    writeToJson(constant.LOBLAWS, constant.CATEGORY_DRINKS, drinks);

  }
}

export default Loblaws;