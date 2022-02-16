function treasureHunt(arr) {
  let chestTreasure = arr.shift().split("|");

  let commands = arr.shift().split(" ");

  while (commands[0] != "Yohoho!") {
    switch (commands[0]) {
      case "Loot":
        commands.shift();
        loot(commands, chestTreasure);
        break;
      case "Drop":
        let index = Number(commands[1]);
        if (index < chestTreasure.length && index > -1) {
          let element = chestTreasure.splice(index, 1);
          chestTreasure.push(...element);
        }
        break;
      case "Steal":
        let countSteeling = Number(commands[1]);
        let newArray = chestTreasure.splice(-countSteeling);
        console.log(newArray.join(", "));
        break;
    }
    commands = arr.shift().split(" ");
  }

  if (chestTreasure.length === 0) {
    console.log(`Failed treasure hunt.`);
  } else {
    let result = 0;

    for (let element of chestTreasure) {
      result += element.length;
    }

    result /= chestTreasure.length;

    console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`);
  }

  function loot(arrOne, arrTwo) {
    for (let element of arrOne) {
      if (!arrTwo.includes(element)) {
        arrTwo.unshift(element);
      }
    }
  }
}
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 10",
  "Yohoho!",
]);
