function phoneBook(array) {
  let obj = {};

  for (let element of array) {
    let [name, phoneNumber] = element.split(" ");

    obj[name] = phoneNumber;
  }

  for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
