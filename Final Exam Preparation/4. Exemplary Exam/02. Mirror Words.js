function mirrorWords(array) {
  let pattern = /(\@|\#)([A-Za-z]{3,})(\1)(\1)([A-Za-z]{3,})(\1)/g;

  let string = array[0];

  let match = string.match(pattern);
  let mirrorWords = [];
  if (match == null) {
    console.log("No word pairs found!");
    console.log("No mirror words!");
  } else {
    for (let i = 0; i < match.length; i++) {
      let word = match[i];
      let index = word.length / 2;
      let firstPart = word.substring(0, index);
      let secondPart = word.substring(index);
      let reversedWord = secondPart.split("").reverse().join("");

      if (firstPart === reversedWord) {
        firstPart = firstPart.substring(1, firstPart.length - 1);
        secondPart = secondPart.substring(1, secondPart.length - 1);
        let words = `${firstPart} <=> ${secondPart}`;
        mirrorWords.push(words);
      }
    }
    console.log(`${match.length} word pairs found!`);
    if (mirrorWords.length > 0) {
      console.log("The mirror words are:");
      console.log(mirrorWords.join(", "));
    } else {
      console.log("No mirror words!");
    }
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
console.log("-----------");
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
console.log("-----------");
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
