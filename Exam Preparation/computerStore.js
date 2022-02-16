function computerStore(array) {
  let tax = 0.2;
  let totalTaxes = 0;
  let costumer = array.pop();

  let totalPriceWithoutTaxes = 0;

  for (let i = 0; i < array.length; i++) {
    let price = Number(array[i]);
    if (price < 0) {
      console.log("Invalid price!");
      continue;
    }
    totalPriceWithoutTaxes += price;
  }
  if (totalPriceWithoutTaxes > 0) {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
    totalTaxes = totalPriceWithoutTaxes * tax;
    console.log(`Taxes: ${totalTaxes.toFixed(2)}$`);
    console.log("-----------");
    if (costumer === "special") {
      let percentDisc = 0.1;
      let discount = (totalPriceWithoutTaxes + totalTaxes) * percentDisc;
      let result = totalTaxes + totalPriceWithoutTaxes - discount;
      console.log(`Total price: ${result.toFixed(2)}$`);
    } else {
      totalPriceWithoutTaxes += totalTaxes;
      console.log(`Total price: ${totalPriceWithoutTaxes.toFixed(2)}$`);
    }
  } else {
    console.log("Invalid order!");
  }
}
computerStore(["regular"]);
