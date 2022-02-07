function arraysOfStrings(arr) {
  let reverse = arr.reverse();

  let output = "";

  for (let i = 0; i < reverse.length; i++) {
    output += " " + arr[i];
  }
  console.log(output);
}
arraysOfStrings(["a", "b", "c", "d", "e"]);
arraysOfStrings(["abc", "def", "hig", "klm", "nop"]);
arraysOfStrings(["33", "123", "0", "dd"]);
