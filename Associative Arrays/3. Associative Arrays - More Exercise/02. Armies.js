function armies(array) {
  let obj = {};

  for (let element of array) {
    if (element.includes("arrives")) {
      let leader = element.split(" arrives").join("");
      obj[leader] = {
        armyCount: 0,
        armyNames: {},
      };
    } else if (element.includes(" + ")) {
      let tokens = element.split(" + ");
      let army = tokens[0];
      let number = Number(tokens[1]);
      for (let key in obj) {
        if (obj[key]["armyNames"].hasOwnProperty(army)) {
          obj[key]["armyNames"][army] += number;
          obj[key]["armyCount"] += number;
        }
      }
    } else if (element.includes("defeated")) {
      let name = element.split(" defeated").join("");
      delete obj[name];
    } else {
      let [leader, army] = element.split(": ");
      army = army.split(", ");
      if (obj.hasOwnProperty(leader)) {
        obj[leader]["armyNames"][army[0]] = Number(army[1]);
        obj[leader]["armyCount"] += Number(army[1]);
      }
    }
  }

  let sorted = Object.entries(obj)
    .sort((a, b) => b[1].armyCount - a[1].armyCount)
    .forEach((el) => {
      console.log(`${el[0]}: ${el[1].armyCount}`);
      Object.entries(el[1].armyNames)
        .sort((a, b) => b[1] - a[1])
        .forEach((el) => {
          console.log(`>>> ${el[0]} - ${el[1]}`);
        });
    });
}
armies([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
