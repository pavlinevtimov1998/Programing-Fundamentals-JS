function inventory(arr) {
  let myInventory = arr.shift().split(", ");

  let commands = arr.shift().split(" - ");

  while (commands[0] != "Craft!") {
    let item = commands[1];

    switch (commands[0]) {
      case "Collect":
        if (!myInventory.includes(item)) {
          myInventory.push(item);
        }
        break;
      case "Drop":
        if (myInventory.includes(item)) {
          let index = myInventory.indexOf(item);
          myInventory.splice(index, 1);
        }
        break;
      case "Combine Items":
        let upgrade = item.split(":");
        if (myInventory.includes(upgrade[0])) {
          let index = myInventory.indexOf(upgrade[0]);
          myInventory.splice(index + 1, 0, upgrade[1]);
        }
        break;
      case "Renew":
        if (myInventory.includes(item)) {
          let indexOfItem = myInventory.indexOf(item);
          let saveItem = myInventory.splice(indexOfItem, 1);
          myInventory.push(saveItem);
        }
        break;
    }
    commands = arr.shift().split(" - ");
  }
  console.log(myInventory.join(", "));
}
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
