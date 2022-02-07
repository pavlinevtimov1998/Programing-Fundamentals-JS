function charactersInRange(a, b) {
  let firstChar = a.charCodeAt(0);
  let secondChar = b.charCodeAt(0);
  let array = [];

  if (firstChar < secondChar) {
    for (let i = firstChar + 1; i < secondChar; i++) {
      array.push(String.fromCharCode(i));
    }
  } else {
    for (let j = secondChar + 1; j < firstChar; j++) {
      array.push(String.fromCharCode(j));
    }
  }

  console.log(array.join(" "));
}
charactersInRange("C", "#");
