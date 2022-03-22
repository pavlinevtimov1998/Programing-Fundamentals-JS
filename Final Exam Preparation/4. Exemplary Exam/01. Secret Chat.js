function secretChat(array) {
  let message = array.shift();

  while (array[0] !== "Reveal") {
    let command = array.shift();
    if (command.includes("InsertSpace")) {
      let [_, index] = command.split(":|:");
      index = Number(index);
      let firstPart = message.substring(0, index);
      let lastPart = message.substring(index);
      message = firstPart + " " + lastPart;
      console.log(message);
    } else if (command.includes("Reverse")) {
      let [_, string] = command.split(":|:");
      if (message.includes(string)) {
        let reversed = string.split("").reverse().join("");
        message = message.replace(string, '');
        message += reversed;
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (command.includes("ChangeAll")) {
      let [_, string, replacement] = command.split(":|:");
      let regex = new RegExp(string, "g");
      message = message.replace(regex, replacement);
      console.log(message);
    }
  }

  console.log(`You have a new text message: ${message}`);

}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:0",
  "Reveal",
]);
console.log("------------");
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
