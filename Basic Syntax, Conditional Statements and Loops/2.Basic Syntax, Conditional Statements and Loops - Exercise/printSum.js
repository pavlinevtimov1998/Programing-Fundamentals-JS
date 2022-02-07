function printSum(startNumber, endNumber) {
  let sum = 0;
  let string = "";
  for (let i = startNumber; i <= endNumber; i++) {
    string += i + " ";
    sum += i;
  }
  console.log(string);
  console.log(`Sum: ${sum}`);
}
printSum(50, 60);
