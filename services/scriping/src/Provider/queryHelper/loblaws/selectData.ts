import { Page } from "puppeteer";

import type { productsType } from "../../../type";

const queryHelper = async(page:Page) => {
  const data = await page.evaluate(() => {
    const containerSelector = 'li.product-tile-group__list__item';

    const brandSelector = '.product-name__item.product-name__item--brand';
    const productNameSelector = '.product-name__item.product-name__item--name';
    const quantitySelector = '.product-name__item.product-name__item--package-size';

    const priceSelector = '.price__value.selling-price-list__item__price.selling-price-list__item__price--now-price__value'; 
    const itemUnitSelector = '.price__unit .selling-price-list__item__price.selling-price-list__item__price--now-price__unit';

    const pricePerUnitSelector = '.price__value.comparison-price-list__item__price__value';
    const perUnitSelector = '.price__unit.comparison-price-list__item__price__unit';

    const productInfo = [] as productsType;
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

        const intListPrice = Number(listPrice?.textContent?.trim().replace("$", ""));
        const intPricePerUnit = Number(pricePerUnit?.textContent?.trim().replace("$", ""));

        productInfo.push({
          brand: brand?.textContent?.trim() || '',
          productName: productName?.textContent?.trim() || '',
          quantity: quantity?.textContent?.trim() || '',
          listPrice: intListPrice || 0,
          itemUnit: itemUnit?.textContent?.trim() || '',
          pricePerUnit: intPricePerUnit || 0,
          perUnit: perUnite?.textContent?.trim().replace("/ ", "") || '',
        });
      })
    };
    return productInfo
  })

  return data;
};

export default queryHelper;