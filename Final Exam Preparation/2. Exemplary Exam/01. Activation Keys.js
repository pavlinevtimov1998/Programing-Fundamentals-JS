function activationKeys(array) {
  let key = array.shift();

  while (array[0] != "Generate") {
    let tokens = array.shift().split(">>>");

    switch (tokens[0]) {
      case "Contains":
        contains(key, tokens[1]);
        break;
      case "Flip":
        key = flip(tokens[2], tokens[3], key, tokens[1]);
        console.log(key);
        break;
      case "Slice":
        key = deleeting(key, tokens[1], tokens[2]);
        console.log(key);
        break;
    }
  }

  console.log(`Your activation key is: ${key}`);

  function contains(key, str) {
    let index = key.indexOf(str);
    if (index > -1) {
      console.log(`${key} contains ${str}`);
    } else {
      console.log("Substring not found!");
    }
  }
  function flip(startIndex, endIndex, key, ch) {
    let firstPart = key.substring(0, Number(startIndex));
    let lastPart = key.substring(Number(endIndex));
    let mainPart = key.substring(Number(startIndex), Number(endIndex));

    if (ch == "Upper" && startIndex != endIndex) {
      mainPart = mainPart.toUpperCase();
      key = firstPart + mainPart + lastPart;
      return key;
    } else if (ch == "Lower" && startIndex != endIndex) {
      mainPart = mainPart.toLowerCase();
      key = firstPart + mainPart + lastPart;
      return key;
    }
  }

  function deleeting(key, startIndex, endIndex) {
    if (startIndex != endIndex) {
      let firstPart = key.substring(0, Number(startIndex));
      let lastPart = key.substring(Number(endIndex));
      key = firstPart + lastPart;
    }
    return key;
  }
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
console.log("-----------");
activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
