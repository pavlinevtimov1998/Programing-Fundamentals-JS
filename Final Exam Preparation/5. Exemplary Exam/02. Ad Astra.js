function nutrition (array) {
  let pattern =
    /(\#|\|)(?<item>[A-Za-z\s]+)(\1)(?<date>\d{1,2}\/\d{1,2}\/\d{1,2})(\1)(?<calories>\d{1,5})(\1)/g;

  let res = [];
  let sum = 0;
  let match = pattern.exec(array[0]);

  while (match !== null) {
    let item = match.groups["item"];
    let date = match.groups["date"];
    let calories = match.groups["calories"];
    sum += Number(calories);

    res.push([item, date, calories]);

    match = pattern.exec(array[0]);
  }
  let days = Math.floor(sum / 2000);

  console.log(`You have food to last you for: ${days} days!`);
  for (let el of res) {
    console.log(`Item: ${el[0]}, Best before: ${el[1]}, Nutrition: ${el[2]}`);
  }
}
nutrition([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
console.log("---------");
nutrition(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
console.log("---------");
nutrition([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
