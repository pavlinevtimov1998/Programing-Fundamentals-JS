function orders(product, numb) {
  let price = 0;

  switch (product) {
    case "water":
      price = 1 * numb;
      break;
    case "coffee":
      price = 1.5 * numb;
      break;
    case "coke":
      price = 1.4 * numb;
      break;
    case "snacks":
      price = 2 * numb;
      break;
  }

  console.log(price.toFixed(2));
}
orders("coffee", 5);
