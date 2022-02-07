function pyramid(size, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;

  let levels = 1;
  let steps = 1;

  while (size >= 1) {
    if (size > 2) {
      if (steps === 5) {
        lapis += (size * 4 - 4) * increment;
        steps = 0;
      } else {
        marble += (size * 4 - 4) * increment;
      }
      steps++;
      levels++;

      stone += Math.pow(size - 2, 2) * increment;
    } else {
      gold += Math.pow(size, 2) * increment;
    }
    size -= 2;
  }
  console.log(
    `Stone required: ${Math.ceil(stone)}\n Marble required: ${Math.ceil(
      marble
    )}\n Lapis Lazuli required: ${Math.ceil(
      lapis
    )}\n Gold required: ${Math.ceil(gold)}\n Final pyramid height: ${Math.floor(
      levels * increment
    )}`
  );
}
//pyramid(11, 1);
pyramid(23, 0.5);
