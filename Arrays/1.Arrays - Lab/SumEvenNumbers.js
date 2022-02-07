function sumEvenNumbers(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) % 2 === 0) {
      result += Number(array[i]);
    }
  }
  console.log(result);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbers(["3", "5", "7", "9"]);
sumEvenNumbers(["2", "4", "6", "8", "10"]);
