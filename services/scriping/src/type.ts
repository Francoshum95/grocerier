import * as constant from './constant/common';

export type productType = {
  [key:string]: string | number
};

export type productsType = productType[];

export type fileNameType = typeof constant.LOBLAWS | typeof constant.NOFRILLS

export type categoryType = typeof constant.CATEGORY_BAKERY | typeof constant.CATEGORY_DAIRY_EGGS |
  typeof constant.CATEGORY_DRINKS | typeof constant.CATEGORY_FRUITS_VEGETABLES | typeof constant.CATEGORY_HOUSEHOLD_SUPPLIES |
  typeof constant.CATEGORY_MEAT | typeof constant.CATEGORY_PANTRY;

export type ProductDataType = {
  [key: string] : productsType
}