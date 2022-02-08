function processOddNumbers(array) {
  let myArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      let number = array[i] * 2;
      myArray.push(number);
    }
  }

  console.log(myArray.reverse().join(" "));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);
