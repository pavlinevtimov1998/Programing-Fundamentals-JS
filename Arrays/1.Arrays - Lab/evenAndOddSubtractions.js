function evenAndOdd(array) {
  let evenNumberSum = 0;
  let oddNumberSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) % 2 === 0) {
      evenNumberSum += Number(array[i]);
    } else {
      oddNumberSum += Number(array[i]);
    }
  }

  console.log(evenNumberSum - oddNumberSum);
}
evenAndOdd([1, 2, 3, 4, 5, 6]);
evenAndOdd([3, 5, 7, 9]);
evenAndOdd([2, 4, 6, 8, 10]);
