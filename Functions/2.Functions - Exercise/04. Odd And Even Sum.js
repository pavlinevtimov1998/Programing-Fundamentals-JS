function oddAndEvenSum(a) {
  let string = String(a);

  let oddNumbSum = 0;
  let evenNumbSum = 0;

  for (let i = 0; i < string.length; i++) {
    let numb = Number(string[i]);
    if (numb % 2 === 0 && numb !== 0) {
      evenNumbSum += numb;
    } else {
      oddNumbSum += numb;
    }
  }
  console.log(`Odd sum = ${oddNumbSum}, Even sum = ${evenNumbSum}`);
}
oddAndEvenSum(3495892137259234);
