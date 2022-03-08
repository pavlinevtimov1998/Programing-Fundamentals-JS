function storage(array) {
  let map = new Map();

  for (let el of array) {
    let [item, quantity] = el.split(" ");
    quantity = Number(quantity);
    if (!map.has(item)) {
      map.set(item, quantity);
    } else {
      let existing = map.get(item);
      map.set(item, existing + quantity);
    }
  }

  for (let [key, qty] of map) {
    console.log(`${key} -> ${qty}`);
  }
}
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
