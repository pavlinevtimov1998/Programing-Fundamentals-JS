function odd(number) {
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= 100; j++) {
      if (j % 2 !== 0) {
        console.log(j);
        sum += j;
        count++;
      }
      if (count === number) {
        break;
      }
    }
    console.log(`Sum: ${sum}`);
    break;
  }
}
odd(3);
