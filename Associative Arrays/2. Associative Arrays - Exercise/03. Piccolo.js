function piccolo(array) {
  let obj = {};

  for (let el of array) {
    let [direction, carNumber] = el.split(", ");
    if (direction == "IN") {
      obj[carNumber] = direction;
    } else {
      delete obj[carNumber];
    }
  }

  let sorted = Array.from(Object.keys(obj)).sort();
  if (sorted.length > 0) {
    for (let key of sorted) {
      console.log(key);
    }
  } else {
    console.log("Parking Lot is Empty");
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
