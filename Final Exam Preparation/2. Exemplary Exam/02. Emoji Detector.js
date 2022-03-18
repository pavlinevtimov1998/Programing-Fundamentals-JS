function emojiDetector(array) {
  let text = array[0];

  let numbPattern = /[0-9]/g;
  let emojiPattern = /([:]{2}|[*]{2})([A-Z][a-z]{2,})\1/g;

  let matchNumbers = text.match(numbPattern).map(Number);
  let matchedEmojis = text.match(emojiPattern);

  let coolTreshold = 1;

  for (let num of matchNumbers) {
    coolTreshold *= num;
  }

  console.log("Cool threshold:", coolTreshold);

  if (matchedEmojis != null) {
    console.log(
      `${matchedEmojis.length} emojis found in the text. The cool ones are:`
    );

    for (let emoji of matchedEmojis) {
      let asciiSum = 0;
      let mainCharsOfEmoji = emoji.substring(2, emoji.length - 2);
      for (let i = 0; i < mainCharsOfEmoji.length; i++) {
        let charCode = mainCharsOfEmoji[i].charCodeAt(0);
        asciiSum += charCode;
      }
      if (asciiSum > coolTreshold) {
        console.log(emoji.trim());
      }
    }
  }
}

emojiDetector([
  "In the Sofia Zoo there are 311 animals in total!  This includes 3 , 1 ::Elephant:, 12 , a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ",
]);
console.log("----------------------------");
emojiDetector([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy::::Popopopopopopopopo:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);
console.log("----------------------------");
emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);
