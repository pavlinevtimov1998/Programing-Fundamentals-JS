function pianist(array) {
  let n = array.shift();
  let obj = {};

  for (let i = 0; i < n; i++) {
    let [piece, composer, key] = array.shift().split("|");

    obj[piece] = {
      composer: composer,
      key: key,
    };
  }

  while (array[0] !== "Stop") {
    let tokens = array.shift().split("|");
    let command = tokens.shift();

    if (command == "Add") {
      if (obj.hasOwnProperty(tokens[0]) == false) {
        obj[tokens[0]] = {
          composer: tokens[1],
          key: tokens[2],
        };
        console.log(
          `${tokens[0]} by ${tokens[1]} in ${tokens[2]} added to the collection!`
        );
      } else {
        console.log(`${tokens[0]} is already in the collection!`);
      }
    } else if (command == "Remove") {
      if (obj.hasOwnProperty(tokens[0])) {
        delete obj[tokens[0]];
        console.log(`Successfully removed ${tokens[0]}!`);
      } else {
        console.log(
          `Invalid operation! ${tokens[0]} does not exist in the collection.`
        );
      }
    } else if (command == "ChangeKey") {
      if (obj.hasOwnProperty(tokens[0])) {
        obj[tokens[0]]["key"] = tokens[1];
        console.log(`Changed the key of ${tokens[0]} to ${tokens[1]}!`);
      } else {
        console.log(
          `Invalid operation! ${tokens[0]} does not exist in the collection.`
        );
      }
    }
  }

  for (const key in obj) {
    console.log(
      `${key} -> Composer: ${obj[key]["composer"]}, Key: ${obj[key]["key"]}`
    );
  }
}
pianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
console.log("-----------");
pianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
