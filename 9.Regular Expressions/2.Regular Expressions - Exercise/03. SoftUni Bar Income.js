function softUniBarIncome(array) {
  let pattern =
    /%(?<name>[A-Z][a-z]*)%.*<(?<productName>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>-?\d+([\|\$\%\.]\d+)?)\$/;

  let match = "";

  let sum = 0;
  let total = 0;

  for (let element of array) {
    if (element == "end of shift") {
      break;
    }

    match = pattern.exec(element);

    if (match != null) {
      let name = match.groups["name"];
      let productName = match.groups["productName"];
      let count = Number(match.groups["count"]);
      let price = Number(match.groups["price"]);
      sum = price * count;
      total += sum;
      console.log(`${name}: ${productName} - ${sum.toFixed(2)}`);
    }
  }

  console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
console.log("------------------");
softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
