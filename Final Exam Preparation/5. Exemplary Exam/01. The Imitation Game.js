function imitationGame(array) {
  let message = array.shift();

  while (array[0] !== "Decode") {
    let tokens = array.shift().split("|");
    let command = tokens.shift();

    if (command == "Move") {
        let numb = Number(tokens[0]);
        let firstLetters = message.substring(0, numb);
        let secondPart = message.substring(numb);
        message = secondPart + firstLetters;
    } else if (command == "Insert") {
      let index = Number(tokens[0]);
      let value = tokens[1];
      let firstPart = message.substring(0, index);
      let seconPart = message.substring(index);

      message = firstPart + value + seconPart;
      
    } else if (command == "ChangeAll") {
      message = message.split(tokens[0]).join(tokens[1]);
    }
  }

  console.log(`The decrypted message is: ${message}`);

}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]);
console.log("----------");
imitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
