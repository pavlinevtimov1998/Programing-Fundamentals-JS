function cardGame(array) {
  let obj = {};

  let powerOfCards = {
    1: 10,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let powerOfSuits = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  for (let element of array) {
    let tokens = element.split(": ");
    let name = tokens[0];
    let cards = tokens[1].split(", ");

    if (obj.hasOwnProperty(name) == false) {
      obj[name] = new Set();
    }

    for (let card of cards) {
      obj[name].add(card);
    }
  }

  for (let [name, cards] of Object.entries(obj)) {
    let sum = 0;
    for (let card of cards) {
      let cardPower = powerOfCards[card[0]];
      let suitPower = powerOfSuits[card.slice(-1)];

      sum += cardPower * suitPower;
    }

    console.log(`${name}: ${sum}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
