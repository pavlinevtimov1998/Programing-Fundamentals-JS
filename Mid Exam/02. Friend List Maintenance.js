function friendListMaintenance(arr) {
  let friends = arr.shift().split(", ");

  let commands = arr.shift().split(" ");

  let blacklistedCount = 0;
  let lostedCount = 0;

  while (commands[0] !== "Report") {
    if (commands[0] == "Blacklist") {
      let name = commands[1];
      if (friends.includes(name)) {
        blacklistedCount++;
        let index = friends.indexOf(name);
        friends[index] = "Blacklisted";
        console.log(`${name} was blacklisted.`);
      } else {
        console.log(`${name} was not found.`);
      }
    } else if (commands[0] == "Error") {
      let index = Number(commands[1]);
      if (index > -1 && index < friends.length) {
        if (friends[index] !== "Blacklisted" && friends[index] !== "Lost") {
          lostedCount++;
          let lostName = friends[index];
          friends[index] = "Lost";
          console.log(`${lostName} was lost due to an error.`);
        }
      }
    } else if (commands[0] == "Change") {
      let index = Number(commands[1]);
      let newName = commands[2];

      if (index > -1 && index < friends.length) {
        let oldName = friends.slice(index, 1);
        friends[index] = newName;
        console.log(`${oldName[0]} changed his username to ${newName}.`);
      }
    }

    commands = arr.shift().split(" ");
  }

  console.log(`Blacklisted names: ${blacklistedCount}`);
  console.log(`Lost names: ${lostedCount}`);
  console.log(friends.join(" "));
}
friendListMaintenance([
  "Mike, John, Eddie, Nicko",
  "Blacklist Mike",
  "Error 0",
  "Change 0 Mike",
  "Report",
]);
