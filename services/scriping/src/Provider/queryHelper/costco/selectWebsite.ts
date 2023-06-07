import { Page } from "puppeteer";

const navigationSelector = "div.categoryclist";

const selectWebsite = async(page: Page) => {
  await page.waitForSelector(navigationSelector);

  const webSiteData = await page.evaluate(() => {
    const websites = [] as {title: string, url: string} [];

    const items = document.querySelectorAll("div.col-xs-6.col-md-3");
    if (items){
      items.forEach(item => {
        const urlItem = item.querySelector("a");
        const url = urlItem.getAttribute('href');

        const titleItem = item.querySelector("h3.category-tile-title");
        const title = titleItem.textContent?.trim() || "";

        if (url){
          websites.push({
            title,
            url
          })
        }
      })
    }

    return items;

  });

  return webSiteData;

};

export default selectWebsite;