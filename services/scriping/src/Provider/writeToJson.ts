import { productsType,ProductDataType, categoryType, fileNameType } from "../type";

const fs = require('fs');
const path = require('path');

const getPath = (fileName: string) => path.join(__dirname, `../data/${fileName}.json`);

const writeToJson = (fileName: fileNameType, category: string, products: productsType) => {
  const jsonPath = getPath(fileName);

  try {
    fs.readFile(jsonPath, (err:any, data:any) => {
      if (err){
        const productData = {} as ProductDataType;
        productData[category] = products;

        const jsonData = JSON.stringify(productData, null, 2);

        fs.writeFile(jsonPath, jsonData, (err: any) => {
          if (err) {
            console.error(`Error writing JSON file in category: ${category}`, err);
          } else {
            console.log(`JSON file has been written successfully -- category: ${category}`);
          }
        })
      } else {
        const originalData = JSON.parse(data);
        originalData[category] = products;

        const jsonData = JSON.stringify(originalData, null, 2);

        fs.writeFile(jsonPath, jsonData, (err: any) => {
          if (err) {
            console.error(`Error writing JSON file in category: ${category}`, err);
          } else {
            console.log(`JSON file has been written successfully -- category: ${category}`);
          }
        })
      };
    })
  } catch(error){
    console.log(`Unexpected error in category: ${category}`, error)
  }

};

export default writeToJson;