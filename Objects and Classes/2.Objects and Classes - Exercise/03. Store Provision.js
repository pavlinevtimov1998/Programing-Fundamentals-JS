function storeProvision(arrayOne, arrayTwo) {
  let newProductArr = [];
  for (let i = 0; i < arrayOne.length; i++) {
    let product = arrayOne[i];
    if (i % 2 === 0 || i == 0) {
      for (let j = 0; j < arrayTwo.length; j++) {
        let localStoreProduct = arrayTwo[j];
        if (j % 2 === 0 || j == 0) {
          if (product == localStoreProduct) {
            let num = Number(arrayOne[i + 1]);
            arrayOne.splice(i + 1, 1, (num += Number(arrayTwo[j + 1])));
          } else if (
            !arrayOne.includes(localStoreProduct) &&
            !newProductArr.includes(localStoreProduct)
          ) {
            newProductArr.push(arrayTwo[j], arrayTwo[j + 1]);
          }
        }
      }
    }
  }
  arrayOne.push(...newProductArr);

  let obj = {};

  for (let element = 0; element < arrayOne.length; element++) {
    if (element % 2 == 0 || element == 0) {
      let num = Number(arrayOne[element + 1]);
      obj[arrayOne[element]] = num;
    }
  }

  for (let key of Object.keys(obj)) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
