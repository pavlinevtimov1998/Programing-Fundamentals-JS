function counterStrike(array) {
  let myArray = array;

  let energy = myArray[0];
  myArray.shift();

  let battlesCount = 0;
  let wonBattlesCount = 0;

  for (let i = 0; i < myArray.length; i++) {
    let command = myArray[i];
    let curDistance = Number(myArray[i]);
    battlesCount++;

    if (command === "End of battle") {
      console.log(`Won battles: ${wonBattlesCount}. Energy left: ${energy}`);
      break;
    }

    if (energy - curDistance >= 0) {
      energy -= curDistance;
      wonBattlesCount++;
      if (battlesCount == 3) {
        energy += wonBattlesCount;
        battlesCount = 0;
      }
    } else {
      console.log(
        `Not enough energy! Game ends with ${wonBattlesCount} won battles and ${energy} energy`
      );
      break;
    }
  }
}
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);

/*The initial energy is 100. The first distance is 10, so we subtract 10 from 100, 
and we consider this a won battle. We are left with 90 energy. Next distance – 10, and 80 energy left.
Next distance – 10, 3 won battles and 70 energy, but since we have 3 won battles, 
we increase the energy with the current count of won battles, in this case – 3, and it becomes 73.
The last distance we receive – 10 is unreachable since we have 0 energy, so we print the appropriate message,
 and the program ends.*/
