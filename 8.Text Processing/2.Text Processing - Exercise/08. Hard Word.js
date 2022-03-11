function hardWords(textArr) {
  let wordsArr = textArr.pop();

  textArr = String(textArr).split(" ");

  for (let element of textArr) {
    for (let word of wordsArr) {
      if (
        element == "_".repeat(word.length) &&
        element.endsWith("," || ".") == false
      ) {
        let index = textArr.indexOf(element);
        textArr.splice(index, 1, word);
      } else if (
        (element.endsWith(",") || element.endsWith(".")) &&
        (element === `${"_".repeat(element.length - 1) + "."}` ||
          element === `${"_".repeat(element.length - 1) + ","}`)
      ) {
        let newElement = element.substring(0, element.length - 1);
        if (newElement.length == word.length) {
          let index = textArr.indexOf(element);
          if (element.endsWith(",")) {
            textArr.splice(index, 1, (word += ","));
          } else {
            textArr.splice(index, 1, (word += "."));
          }
        }
      }
    }
  }

  console.log(textArr.join(" "));
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);
