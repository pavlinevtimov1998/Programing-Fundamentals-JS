function heartDelivery(arr) {
  let neighborhood = arr.shift().split("@").map(Number);

  let commands = arr.shift().split(" ");

  let curIndex = 0;

  while (commands[0] !== "Love!") {
    let jumpLength = Number(commands[1]);

    curIndex += jumpLength;

    if (curIndex > neighborhood.length - 1) {
      curIndex = 0;
    }
    if (neighborhood[curIndex] > 0) {
      neighborhood[curIndex] -= 2;
      if (neighborhood[curIndex] === 0) {
        console.log(`Place ${curIndex} has Valentine's day.`);
      }
    } else {
      console.log(`Place ${curIndex} already had Valentine's day.`);
    }
    commands = arr.shift().split(" ");
  }
  console.log(`Cupid's last position was ${curIndex}.`);

  let numbers = neighborhood.filter((x) => x > 0);

  if (numbers.length > 0) {
    console.log(`Cupid has failed ${numbers.length} places.`);
  } else {
    console.log(`Mission was successful.`);
  }
}
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love! ",
]);
