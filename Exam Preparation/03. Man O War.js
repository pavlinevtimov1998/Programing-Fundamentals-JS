function manWar(arr) {
  let statusOfPirateShip = arr.shift().split(">").map(Number);
  let warshipStatus = arr.shift().split(">").map(Number);

  let healthCapacity = Number(arr.shift());

  let commands = arr.shift().split(" ");
  let isTheGameEnd = true;

  while (commands[0] !== "Retire") {
    switch (commands[0]) {
      case "Fire":
        let fireIndex = Number(commands[1]);
        if (fireIndex > -1 && fireIndex <= warshipStatus.length - 1) {
          let damage = Number(commands[2]);
          if (warshipStatus[fireIndex] - damage > 0) {
            warshipStatus[fireIndex] -= damage;
          } else {
            isTheGameEnd = false;
            return `You won! The enemy ship has sunken.`;
          }
        }
        break;
      case "Defend":
        let startDefendIndex = Number(commands[1]);
        let endDefendIndex = Number(commands[2]);
        if (
          startDefendIndex > -1 &&
          startDefendIndex < statusOfPirateShip.length &&
          endDefendIndex > -1 &&
          endDefendIndex < statusOfPirateShip.length
        ) {
          let damage = Number(commands[3]);
          for (let i = startDefendIndex; i <= endDefendIndex; i++) {
            statusOfPirateShip[i] -= damage;
            if (statusOfPirateShip[i] <= 0) {
              isTheGameEnd = false;
              return "You lost! The pirate ship has sunken.";
            }
          }
        }
        break;
      case "Repair":
        let repairIndex = Number(commands[1]);
        if (repairIndex > -1 && repairIndex < statusOfPirateShip.length) {
          let repairHealth = Number(commands[2]);
          statusOfPirateShip[repairIndex] += repairHealth;
          if (statusOfPirateShip[repairIndex] > healthCapacity) {
            statusOfPirateShip[repairIndex] = healthCapacity;
          }
        }
        break;
      case "Status":
        let count = 0;
        let percentage = healthCapacity * 0.2;
        for (let element of statusOfPirateShip) {
          if (element < percentage) {
            count++;
          }
        }
        console.log(`${count} sections need repair.`);
        break;
    }
    commands = arr.shift().split(" ");
    /*2 sections need repair.
Pirate ship status: 135
Warship status: 205*/
  }
  if (isTheGameEnd) {
    let pirates = statusOfPirateShip.reduce((a, b) => a + b);
    console.log(`Pirate ship status: ${pirates}`);
    let warship = warshipStatus.reduce((a, b) => a + b);
    console.log(`Warship status: ${warship}`);
  }
}
manWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
