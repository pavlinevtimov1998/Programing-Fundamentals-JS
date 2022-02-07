function factotialDivision(numberOne, numberTwo) {
  function firstFactorial(firstNumber) {
    let array = [];
    for (let i = 1; i <= numberOne; i++) {
      array.push(i);
    }
    let factorial = 1;
    for (let j = 0; j < array.length; j++) {
      factorial *= array[j];
    }
    return factorial;
  }
  function secondFactorial(secondNumber) {
    let array = [];
    for (let i = 1; i <= numberTwo; i++) {
      array.push(i);
    }
    let factorial = 1;
    for (let j = 0; j < array.length; j++) {
      factorial *= array[j];
    }
    return factorial;
  }

  let result = firstFactorial(numberOne) / secondFactorial(numberTwo);
  console.log(result.toFixed(2));
}
factotialDivision(6, 2);
