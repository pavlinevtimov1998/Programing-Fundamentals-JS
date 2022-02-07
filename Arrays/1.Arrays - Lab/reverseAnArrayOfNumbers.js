function reverseArray(input, arr) {
  let number = Number(input);
  let newArray = [];

  for (let i = number; i > 0; i--) {
    newArray += " " + arr[i - 1];
  }
  console.log(newArray);
}
reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);
