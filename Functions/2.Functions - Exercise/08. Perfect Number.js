function perfectNumber(number) {
  let isPerfect = false;
  let sum = 0;

  for (let i = 1; i <= number / 2; i++) {
    sum += i;
    if (sum == number) {
      isPerfect = true;
      break;
    }
  }

  if (isPerfect) {
    console.log("We have a perfect number!");
  } else {
    console.log(`It's not so perfect.`);
  }
}
perfectNumber(1236498);
