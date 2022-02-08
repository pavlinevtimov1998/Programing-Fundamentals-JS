function firstAndLastNumber(array) {
  let keyNumber = array.shift();
  let firstArray = array.slice(0, keyNumber);
  let secondArray = array.reverse().slice(0, keyNumber);

  console.log(firstArray.join(" "));
  console.log(secondArray.reverse().join(" "));
}
firstAndLastNumber([3, 6, 7, 8, 9]);
