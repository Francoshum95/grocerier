import { Page } from "puppeteer";

const productSelector = "div.product-tile-set"

const selectProduct = async(page:Page) => {
  await page.waitForSelector(productSelector);

  const products = await page.evaluate(() => {
    const items = document.querySelectorAll("a.product-image-url");
    const productSites = [] as string[];
    if (items){
      items.forEach(item => {
        const url = item.getAttribute('href'); 
        if (url){
          productSites.push(url)
        }
      });
    }

    return  productSites

  });

  return products;
};

export default selectProduct;

