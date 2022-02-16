function solve(integers) {
  let numbers = integers.split(" ").map(Number);
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  let avg = total / numbers.length;

  let newArray = [];

  for (let j = 0; j < numbers.length; j++) {
    if (avg < numbers[j]) {
      newArray.push(numbers[j]);
    }
  }

  if (newArray.length <= 0) {
    console.log("No");
  }
  if (newArray.length > 5) {
    let go = newArray.sort((a, b) => b - a);
    let sliced = go.splice(0, 5);
    console.log(sliced.join(" "));
  } else if (newArray.length <= 5 && newArray.length !== 0) {
    let sorted = newArray.sort((a, b) => b - a);
    console.log(sorted.join(" "));
  }
}
solve("1");
