function stringGame(array) {
  let string = array.shift();

  while (array[0] !== "Done") {
    let commands = array.shift().split(" ");

    if (commands.includes("Change")) {
      let [_, char, replacement] = commands;
      if (string.includes(char)) {
        let regex = new RegExp(char, "g");
        string = string.replace(regex, replacement);
      }
      console.log(string);
    } else if (commands.includes("Includes")) {
      let [_, substring] = commands;
      if (string.includes(substring)) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (commands.includes("End")) {
      let [_, substring] = commands;
      if (string.endsWith(substring)) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (commands.includes("Uppercase")) {
      string = string.toLocaleUpperCase();
      console.log(string);
    } else if (commands.includes("FindIndex")) {
      let [_, char] = commands;
      let index = string.indexOf(char);
      console.log(index);
    } else if (commands.includes("Cut")) {
      let [_, startIndex, count] = commands;
      startIndex = Number(startIndex);
      count = Number(count);
      string = string.substring(startIndex, startIndex + count);
      console.log(string);
    }
  }
}
stringGame([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
console.log("---------");
stringGame([
  "*S0ftUni is the B3St Plac3**",
  "Change 2 o",
  "Includes best",
  "End is",
  "Uppercase",
  "FindIndex P",
  "Cut 3 7",
  "Done",
]);
console.log("---------");
//stringGame();
