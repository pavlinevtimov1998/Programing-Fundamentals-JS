function integer(n1, n2, n3) {
  let result = n1 + n2 + n3;
  if (result % 1 === 0) {
    console.log(`${result} - Integer`);
  } else {
    console.log(`${result} - Float`);
  }
}
integer(9, 100, 1);
