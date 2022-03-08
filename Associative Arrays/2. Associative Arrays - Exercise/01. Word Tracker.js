function wordsTracker(array) {
  let words = array.shift().split(" ");

  let map = new Map();

  words.forEach((el) => map.set(el, 0));

  for (let el of array) {
    if (map.has(el)) {
      let existing = map.get(el);
      map.set(el, existing + 1);
    }
  }

  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let [word, numb] of sorted) {
    console.log(word, "-", numb);
  }
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
