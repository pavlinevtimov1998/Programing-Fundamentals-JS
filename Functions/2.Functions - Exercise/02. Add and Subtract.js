function addAndSubstract(a, b, c) {
  let adding = (a, b) => a + b;
  let subtracting = (c) => adding(a, b) - c;
  console.log(subtracting(c));
}
addAndSubstract(42, 58, 100);
