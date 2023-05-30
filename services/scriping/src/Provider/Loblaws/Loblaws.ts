import { writeFile } from "fs";
import { PuppeteerT } from "../../Puppeteer";
import { LOBLAWS_BAKERY, LOBLAWS_DAIRY_EGGS, LOBLAWS_DRINKS, LOBLAWS_FRUITS_VEGETABLES, LOBLAWS_HOUSEHOLD_SUPPLIES, LOBLAWS_MEAT, LOBLAWS_PANTRY } from "../../constant/loblaws/site";
import queryHelper from "../queryHelper";


class Loblaws{
  private page: PuppeteerT;
  
  constructor(page:PuppeteerT) {
    this.page = page
  }

  writeJson(){
    writeFile('data.json', "", (err: any) => {
      if (err){
        console.error('Error writing JSON file:', err);

      } else {
      console.log('JSON file has been written successfully.');      }
    });
  };

  async main(){
    await this.page.goToSite(LOBLAWS_DAIRY_EGGS);
    const fruite_vegetables = await queryHelper(this.page.page);

    console.log("done... 1/7, LOBLAWS_DAIRY_EGGS")

    await this.page.goToSite(LOBLAWS_FRUITS_VEGETABLES);
    const dairy_and_eggs = await queryHelper(this.page.page);

    console.log("done... 2/7, LOBLAWS_FRUITS_VEGETABLES")

    await this.page.goToSite(LOBLAWS_MEAT);
    const meat = await queryHelper(this.page.page);

    console.log("done... 3/7, LOBLAWS_MEAT")

    await this.page.goToSite(LOBLAWS_BAKERY);
    const bakery = await queryHelper(this.page.page);

    console.log("done... 4/7, LOBLAWS_BAKERY")

    await this.page.goToSite(LOBLAWS_PANTRY);
    const pantry = await queryHelper(this.page.page);
    
    console.log("done... 5/7, LOBLAWS_PANTRY")

    await this.page.goToSite(LOBLAWS_HOUSEHOLD_SUPPLIES);
    const household_supplies = await queryHelper(this.page.page);

    console.log("done... 6/7, LOBLAWS_HOUSEHOLD_SUPPLIES")

    await this.page.goToSite(LOBLAWS_DRINKS);
    const drinks = await queryHelper(this.page.page);

    console.log("done... 7/7, LOBLAWS_DRINKS")

    return {
      fruite_vegetables,
      dairy_and_eggs,
      meat,
      bakery,
      pantry,
      household_supplies,
      drinks
    }
    
  }
}

export default Loblaws;