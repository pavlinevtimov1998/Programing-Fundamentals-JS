function myWork(array) {
  let peterAccaunt = array[0].split(" ");

  for (let i = 1; i < array.length; i++) {
    let myArray = array[i].split(" ");
    let command = myArray[0];
    let game = myArray[1];

    if (command === "Play!") {
      break;
    }

    if (command === "Install") {
      peterAccaunt.push(game);
    } else if (command === "Uninstall" && peterAccaunt.includes(game)) {
      let uninstallGame = peterAccaunt.indexOf(game);
      peterAccaunt.splice(uninstallGame, 1);
    } else if (command === "Update" && peterAccaunt.includes(game)) {
      let updatedGame = peterAccaunt.indexOf(game);
      peterAccaunt.splice(updatedGame, 1);
      peterAccaunt.push(game);
    } else if (command === "Expansion") {
      let expansion = game.split("-");
      let expandedGame = expansion[0];

      if (peterAccaunt.includes(expandedGame)) {
        let index = peterAccaunt.indexOf(expandedGame);
        let expanded = expansion.join(":");
        peterAccaunt.splice(index + 1, 0, expanded);
      }
    }
  }
  console.log(peterAccaunt.join(" "));
}
myWork([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
