import { Page } from "puppeteer";

const selectData = async(page: Page) => {
  const data = await page.evaluate(() => {
    const containerSelector = '';
    

  });

  return data;
}; 

export default selectData;
