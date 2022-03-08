function oddOccurrences(sentence) {
  let map = new Map();

  let words = sentence.split(" ");

  for (let el of words) {
    el = el.toLowerCase();
    if (!map.has(el)) {
      map.set(el, 1);
    } else {
      let count = map.get(el);
      map.set(el, count + 1);
    }
  }

  let outputArray = [];

  for (let [word, count] of map) {
    if (count % 2 !== 0) {
      outputArray.push(word);
    }
  }

  console.log(outputArray.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
