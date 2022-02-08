function negativeOrPositiveNumbs(array) {
  let myArray = [];
  myArray.push(array.shift());

  for (let i = 0; i < array.length; i++) {
    let number = Number(array[i]);

    for (let j = 0; j < myArray.length; j++) {
      if (number >= 0) {
        myArray.push(number);
        break;
      } else {
        myArray.unshift(number);
        break;
      }
    }
  }

  for (let char of myArray) {
    console.log(char);
  }
}
negativeOrPositiveNumbs(["3", "-2", "0", "-1"]);
