function modifier(array) {
  let numbers = array[0].split(" ");
  array.shift();

  for (let i = 0; i < array.length; i++) {
    let change = array[i].split(" ");
    let command = change[0];
    let firstIndex = change[1];
    let secondIndex = change[2];

    if (command === "swap") {
      let a = numbers[firstIndex];
      let b = numbers[secondIndex];
      numbers.splice(firstIndex, 1, b);
      numbers.splice(secondIndex, 1, a);
    } else if (command === "multiply") {
      let multiply = Number(numbers[firstIndex]) * Number(numbers[secondIndex]);
      numbers.splice(firstIndex, 1, multiply);
    } else if (command === "decrease") {
      for (let j = 0; j < numbers.length; j++) {
        let decrease = Number(numbers[j]) - 1;
        numbers.splice(j, 1, decrease);
      }
    } else if (command === "end") {
      break;
    }
  }
  let output = numbers.join(", ");
  console.log(output);
}
modifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
