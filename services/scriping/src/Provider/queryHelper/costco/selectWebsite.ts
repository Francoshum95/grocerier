import { Page } from "puppeteer";

const navigationSelector = "div.categoryclist";

const selectWebsite = async(page: Page) => {
  await page.waitForSelector(navigationSelector);

  const webSiteData = await page.evaluate(() => {
    const websites = [] as {title: string, url: string} [];

    const items = document.querySelectorAll("span.description");

    console.log("testiong item", items


    if (items){
      items.forEach(item => {

        const url = item.getAttribute('href');
        const title = item?.textContent?.trim() || "";

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