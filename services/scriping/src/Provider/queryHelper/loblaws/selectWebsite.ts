import { Page } from "puppeteer";

const navigationSelector = "div.category-navigation";

const selectWebsite = async (page: Page) => {
  await page.waitForSelector(navigationSelector);

  const webSiteData = await page.evaluate(() => {

    const websites = [] as {title: string, url: string} [];
    const items = document.querySelectorAll("a.category-navigation-item__link");

    if (items){
      items.forEach(item => {
        const url = item.getAttribute('href');
        const title = item.textContent?.trim() || ""
        if (url){
          websites.push({title, url})
        }
      })
    }

    return websites
  });

  return webSiteData;
  
};

export default selectWebsite;