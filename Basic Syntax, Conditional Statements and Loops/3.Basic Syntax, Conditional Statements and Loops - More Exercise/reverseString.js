function reverseString(string) {
  let s = "";

  for (let i = string.length - 1; i >= 0; i--) {
    s += "" + string[i];
  }
  console.log(s);
}
reverseString("12345");

//Look at the lecture, there have explanation of more easyer way!!! ;)
