function addressBook(array) {
  let obj = {};

  for (let element of array) {
    let [name, address] = element.split(":");
    obj[name] = address;
  }

  let sortedBook = Object.keys(obj).sort((a, b) => a.localeCompare(b));

  for (let el of sortedBook) {
    console.log(`${el} -> ${obj[el]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
