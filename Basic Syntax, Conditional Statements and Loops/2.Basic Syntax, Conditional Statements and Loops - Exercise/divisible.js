function divisible(n) {
  let number;
  let boolean = true;
  for (let i = 1; i <= 10; i++) {
    if (i === 1 || i === 4 || i === 5 || i === 8 || i === 9) {
      continue;
    }
    if (n % i === 0) {
      number = i;
      boolean = false;
    }
  }
  if (boolean) {
    console.log(`Not divisible`);
  } else {
    console.log(`The number is divisible by ${number}`);
  }
}
divisible(15);
