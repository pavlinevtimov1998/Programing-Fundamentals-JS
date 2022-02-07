function triangleNumbers(number) {
  let eachLine = "";

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      eachLine += i + " ";
    }
    eachLine += "\n";
  }

  console.log(`${eachLine} `);
}
triangleNumbers(3);
