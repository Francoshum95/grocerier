import * as constant from './constant/common';

export type productType = {
  brand: string
  productName: string
  quantity: string
  listPrice: number
  itemUnit: string
  pricePerUnit: number
  perUnit: string
};

export type productsType = productType[];

export type fileNameType = typeof constant.LOBLAWS;

export type categoryType = typeof constant.CATEGORY_BAKERY | typeof constant.CATEGORY_DAIRY_EGGS |
  typeof constant.CATEGORY_DRINKS | typeof constant.CATEGORY_FRUITS_VEGETABLES | typeof constant.CATEGORY_HOUSEHOLD_SUPPLIES |
  typeof constant.CATEGORY_MEAT | typeof constant.CATEGORY_PANTRY;

export type ProductDataType = {
  fruite_vegetables?: productsType,
  dairy_and_eggs?: productsType,
  meat?: productsType,
  bakery?: productsType,
  pantry?: productsType,
  household_supplies?: productsType,
  drinks?: productsType
}