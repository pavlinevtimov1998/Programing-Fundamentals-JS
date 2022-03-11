function passwordGenerator(array) {
  let concat = array[0].concat(array[1]);
  let thirdWord = array[2].toLocaleUpperCase().split("");
  let vowels = concat.match(/[aeiou]/gi);
  concat = concat.split("");
  let string = [];

  for (let i = 0; i < concat.length; i++) {
    let curChar = concat[i];

    if (vowels.includes(curChar)) {
      for (let j = 0; j < thirdWord.length; j++) {
        let charFromWord = thirdWord[j];
        concat[i] = charFromWord;
        let char = thirdWord.shift();
        string.push(char);
        break;
      }
    }

    if (thirdWord.length == 0) {
      thirdWord.push(...string);
      string = [];
    }
  }

  console.log(`Your generated password is ${concat.reverse().join("")}`);
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
console.log("-------------");
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
console.log("-------------");
passwordGenerator([
  "areyousureaboutthisone",
  "notquitebutitrustyou",
  "disturbed",
]);
