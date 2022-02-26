function employees(array) {
  let obj = {};

  for (let element of array) {
    let personalNumber = element.length;
    obj.name = element;
    obj.personalNumber = personalNumber;
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
