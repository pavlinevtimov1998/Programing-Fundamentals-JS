function modifier(array) {
  let myArray = array.shift().split(" ").map(Number);

  for (let elements of array) {
    let command = elements.split(" ");

    if (command[0] == "swap") {
      let elementOne = myArray.slice(
        Number(command[1]),
        Number(command[1]) + 1
      );
      let elementTwo = myArray.slice(
        Number(command[2]),
        Number(command[2]) + 1
      );
      myArray.splice(Number(command[2]), 1, ...elementOne);
      myArray.splice(Number(command[1]), 1, ...elementTwo);
    } else if (command[0] == "multiply") {
      let firstElement = myArray.slice(
        Number(command[1]),
        Number(command[1]) + 1
      );
      let secondElement = myArray.slice(
        Number(command[2]),
        Number(command[2]) + 1
      );
      let multiply = firstElement[0] * secondElement[0];
      myArray.splice(Number(command[1]), 1, multiply);
    } else if (command[0] == "decrease") {
      for (let i = 0; i < myArray.length; i++) {
        myArray[i] -= 1;
      }
    } else if (command[0] == "end") {
      break;
    }
  }
  console.log(myArray.join(", "));
}
modifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
