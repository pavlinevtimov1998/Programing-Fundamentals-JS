function catalogue(products) {
  products.sort((a, b) => a.localeCompare(b));

  let allProducts = [];

  for (let element of products) {
    let [name, price] = element.split(" : ");
    let obj = {
      name,
      price,
    };
    allProducts.push(obj);
  }
  let currentChar = "";
  for (let product of allProducts) {
    if (product.name.charAt(0) === currentChar) {
      console.log(` ${product.name}: ${product.price}`);
    } else {
      currentChar = product.name.charAt(0).toUpperCase();
      console.log(currentChar);
      console.log(` ${product.name}: ${product.price}`);
    }
  }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
