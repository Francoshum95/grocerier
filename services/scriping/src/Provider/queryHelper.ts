import { Page } from "puppeteer";

const containerSelector = 'li.product-tile-group__list__item';
const nextItemsButtonSelector = 'div.load-more-button > button';

export type productType = {
  brand: string
  productName: string
  quantity: string
  listPrice: string
  itemUnit: string
  pricePerUnit: string
  perUnit: string
};

const queryHelper = async(page:Page) => {
  await page.waitForSelector(containerSelector);

  let isNextItemsButton = true;
  try {
    while(isNextItemsButton){
      await page.waitForSelector(containerSelector);
      await page.waitForSelector(nextItemsButtonSelector)
      const button = await page.$(nextItemsButtonSelector);
      await button.click();
    }
  } catch (error){
    isNextItemsButton = false;
  };
  
  await page.waitForSelector(containerSelector);

  const data = await page.evaluate(() => {
    const containerSelector = 'li.product-tile-group__list__item';

    const brandSelector = '.product-name__item.product-name__item--brand';
    const productNameSelector = '.product-name__item.product-name__item--name';
    const quantitySelector = '.product-name__item.product-name__item--package-size';

    const priceSelector = '.price__value.selling-price-list__item__price.selling-price-list__item__price--now-price__value'; 
    const itemUnitSelector = '.price__unit .selling-price-list__item__price.selling-price-list__item__price--now-price__unit';

    const pricePerUnitSelector = '.price__value.comparison-price-list__item__price__value';
    const perUnitSelector = '.price__unit.comparison-price-list__item__price__unit';

    const productInfo = [] as productType[];
    const items = document.querySelectorAll(containerSelector);

    if (items){
      items.forEach(item => {
        const brand = item.querySelector(brandSelector);
        const productName = item.querySelector(productNameSelector);
        const quantity = item.querySelector(quantitySelector);
        const listPrice = item.querySelector(priceSelector);
        const itemUnit = item.querySelector(itemUnitSelector);
        const pricePerUnit = item.querySelector(pricePerUnitSelector);
        const perUnite = item.querySelector(perUnitSelector);

        productInfo.push({
          brand: brand?.textContent?.trim() || '',
          productName: productName?.textContent?.trim() || '',
          quantity: quantity?.textContent?.trim() || '',
          listPrice: listPrice?.textContent?.trim() || '',
          itemUnit: itemUnit?.textContent?.trim() || '',
          pricePerUnit: pricePerUnit?.textContent?.trim() || '',
          perUnit: perUnite?.textContent?.trim().replace("/ ", "") || '',
        });
      })
    };
    return productInfo
  })

  return data;
};

export default queryHelper;