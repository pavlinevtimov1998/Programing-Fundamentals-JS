function palindrome(array) {
  let second = "";

  for (let i = 0; i < array.length; i++) {
    let string = String(array[i]);
    for (let j = string.length - 1; j >= 0; j--) {
      second += string[j];
    }
    if (second === string) {
      console.log(true);
    } else {
      console.log(false);
    }
    second = "";
  }
}
palindrome([32, 2, 232, 1010]);
