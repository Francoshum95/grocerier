import { Page } from "puppeteer";

const containerSelector = 'li.product-tile-group__list__item';
const nextItemsButtonSelector = 'div.load-more-button > button';

const selectButton = async (page:Page) => {
  let isNextItemsButton = true;
  let count = 0;

  try {
    while(isNextItemsButton){
      if (count > 40){
        console.log("stopped ... count greater than 40")
        break;
      }
      
      await page.waitForSelector(containerSelector);
      await page.waitForSelector(nextItemsButtonSelector)
      const button = await page.$(nextItemsButtonSelector);
      await button.click();
      count ++;
      
      console.log("click: ", count)
    }
  } catch (error){
    isNextItemsButton = false;
  };
}

export default selectButton