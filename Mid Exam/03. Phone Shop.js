function phoneShop(arr) {
  let listOfPhones = arr[0].split(", ");
  arr.shift();

  let commands = arr.shift().split(" - ");

  while (commands[0] != "End") {
    let phone = commands[1];

    if (commands[0] === "Add") {
      if (!listOfPhones.includes(phone)) {
        listOfPhones.push(phone);
      }
    } else if (commands[0] === "Remove") {
      if (listOfPhones.includes(phone)) {
        let index = listOfPhones.indexOf(phone);
        listOfPhones.splice(index, 1);
      }
    } else if (commands[0] === "Bonus phone") {
      let newPhone = phone.split(":");
      if (listOfPhones.includes(newPhone[0])) {
        let index = listOfPhones.indexOf(newPhone[0]);
        listOfPhones.splice(index + 1, 0, newPhone[1]);
      }
    } else if (commands[0] === "Last") {
      if (listOfPhones.includes(phone)) {
        let index = listOfPhones.indexOf(phone);
        let lastPhone = listOfPhones.splice(index, 1);
        listOfPhones.push(lastPhone);
      }
    }
    commands = arr.shift().split(" - ");
  }

  console.log(listOfPhones.join(", "));
}
phoneShop([
  "SamsungA50, MotorolaG5, IphoneSE",
  "Add - Iphone10",
  "Remove - IphoneSE",
  "End",
]);
phoneShop([
  "HuaweiP20, XiaomiNote",
  "Remove - Samsung",
  "Bonus phone - XiaomiNote:Iphone5",
  "End",
]);
phoneShop([
  "SamsungA50, MotorolaG5, HuaweiP10",
  "Last - SamsungA50",
  "Add - MotorolaG5",
  "End",
]);
