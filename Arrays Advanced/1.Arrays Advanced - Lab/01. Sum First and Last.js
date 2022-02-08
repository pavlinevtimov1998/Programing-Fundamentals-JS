function sumFirstAndLast(array) {
  let firstNumber = Number(array.shift());
  let lastNumber = Number(array.pop());

  console.log(firstNumber + lastNumber);
}
sumFirstAndLast(["20", "30", "40"]);
