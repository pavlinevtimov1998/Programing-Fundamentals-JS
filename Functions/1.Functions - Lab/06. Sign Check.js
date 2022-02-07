function signCheck(numOne, numTwo, numThree) {
  let result = "";

  if (numOne * numTwo * numThree > 0) {
    result = "Positive";
  } else {
    result = "Negative";
  }

  console.log(result);
}
signCheck(-5, -12, 15);
