function companyUsers(array) {
  let obj = {};

  for (let element of array) {
    let [companyName, idNumber] = element.split(" -> ");

    if (obj.hasOwnProperty(companyName) == false) {
      obj[companyName] = new Set();
    }

    obj[companyName].add(idNumber);
  }

  let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [company, idNumbers] of sorted) {
    console.log(company);
    idNumbers.forEach((element) => console.log("--", element));
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
