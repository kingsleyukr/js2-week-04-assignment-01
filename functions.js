const getProductsOfNormalQuality = (productList) => productList.filter((product) => product.quality === 'Normal');

const getProductImageWithPngExtension = (productList) => productList.filter((product) => product.productImage.includes('png'));

const getCalorieOfTheMostExpensiveProduct = (productList) => productList.sort((smallestPrice,biggestPrice) => biggestPrice.price-smallestPrice.price)[0].totalCalories
;

const sortByExpirationDate = (productList) => {
  let result = productList.sort((a,b) => a.expireDate-b.expireDate);
  return result
};

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
