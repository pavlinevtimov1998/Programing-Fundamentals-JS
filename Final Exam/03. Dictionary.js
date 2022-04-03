function dictionary(array) {
  let arrOfText = array.shift().split(" | ");
  let words = array.shift().split(" | ");
  let command = array.shift();

  let obj = {};

  for (let el of arrOfText) {
    let [word, definition] = el.split(": ");

    if (obj.hasOwnProperty(word) == false) {
      obj[word] = [definition];
    } else {
      obj[word].push(definition);
    }
  }

  let existing = [];

  for (let word of words) {
    if (obj.hasOwnProperty(word)) {
      existing.push(word);
    }
  }

  if (command == "Test") {
    for (let word of existing) {
      console.log(`${word}:`);
      for (let definition of obj[word]) {
        console.log(` -${definition}`);
      }
    }
  } else if (command == "Hand Over") {
    let output = [];
    for (let key in obj) {
      output.push(key);
    }
    console.log(output.join(" "));
  }
}
dictionary([
  "programmer: an animal, which turns coffee into code | developer: a magician",
  "fish | domino",
  "Hand Over",
]);
console.log("---------");
dictionary([
  "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
  "care | kitchen | flower",
  "Test",
]);
console.log("---------");
dictionary([
  "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
  "bit | code | tackle",
  "Test",
]);
