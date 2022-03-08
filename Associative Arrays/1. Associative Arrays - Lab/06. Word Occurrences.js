function wordOccurrences(array) {
  let map = new Map();

  for (let el of array) {
    if (!map.has(el)) {
      map.set(el, 1);
    } else {
      let existing = map.get(el);
      map.set(el, existing + 1);
    }
  }

  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let [word, numb] of sorted) {
    console.log(word, "->", numb, "times");
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
