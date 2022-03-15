function furniture(array) {
  let pattern =
    />>(?<name>[A-Z]*[a-z]*)<<(?<price>(\d+|\d+(,|\.)(\d+)))!(?<quantity>\d+)\b/m;

  let sum = 0;

  let match = "";
  console.log("Bought furniture:");
  for (let element of array) {
    if (element == "Purchase") {
      break;
    }

    match = pattern.exec(element);

    if (match != null) {
      let name = match.groups["name"];
      let price = match.groups["price"];
      let quantity = match.groups["quantity"];
      sum += Number(price) * Number(quantity);

      console.log(name);
    }
  }

  console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
console.log("-------------------------");
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
console.log("-------------------------");
furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
