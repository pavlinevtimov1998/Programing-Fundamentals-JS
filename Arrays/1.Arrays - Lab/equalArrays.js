function equalArrays(firstArr, secondArr) {
  let sum = 0;
  let isIndentical = false;

  for (let i = 0; i < firstArr.length; i++) {
    if (Number(firstArr[i]) === Number(secondArr[i])) {
      sum += Number(firstArr[i]);
      isIndentical = true;
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isIndentical = false;
      break;
    }
  }

  if (isIndentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);
