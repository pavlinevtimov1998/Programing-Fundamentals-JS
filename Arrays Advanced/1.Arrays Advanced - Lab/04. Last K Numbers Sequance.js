function lastKeyNumbers(neededLength, keyElements) {
  let arr = [];
  arr.push(1);

  for (let i = 0; i < neededLength - 1; i++) {
    let number = 0;
    for (let j = 1; j <= keyElements; j++) {
      if (arr.length < j) {
        break;
      }
      number += arr[arr.length - j];
    }
    arr.push(number);
  }
  console.log(arr.join(" "));
}
lastKeyNumbers(8, 2);
