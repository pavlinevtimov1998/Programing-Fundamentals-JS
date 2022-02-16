function memoryGame(array) {
  let sequenceOfElements = array[0].split(" ");
  array.shift();

  let countGames = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "end") {
      console.log(`Sorry you lose :(`);
      console.log(sequenceOfElements.join(" "));
      break;
    }
    let indexes = array[i].split(" ");
    let firstIndex = Number(indexes[0]);
    let secondIndex = Number(indexes[1]);
    countGames++;

    if (
      firstIndex < 0 ||
      secondIndex < 0 ||
      firstIndex == secondIndex ||
      firstIndex > sequenceOfElements.length - 1 ||
      secondIndex > sequenceOfElements.length - 1
    ) {
      console.log("Invalid input! Adding additional elements to the board");
      let middle = Math.floor(sequenceOfElements.length / 2);
      let invalid = `-${countGames}a`;
      sequenceOfElements.splice(middle, 0, invalid);
      sequenceOfElements.splice(middle, 0, invalid);
      continue;
    }

    if (
      array[i] !== "end" &&
      sequenceOfElements[firstIndex] === sequenceOfElements[secondIndex]
    ) {
      if (firstIndex > secondIndex) {
        let element = sequenceOfElements.splice(firstIndex, 1);
        sequenceOfElements.splice(secondIndex, 1);
        console.log(`Congrats! You have found matching elements - ${element}!`);
      } else {
        let element = sequenceOfElements.splice(secondIndex, 1);
        sequenceOfElements.splice(firstIndex, 1);
        console.log(`Congrats! You have found matching elements - ${element}!`);
      }
    } else {
      console.log("Try again!");
    }

    if (sequenceOfElements.length == 0) {
      console.log(`You have won in ${countGames} turns!`);
      break;
    }
  }
}
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
