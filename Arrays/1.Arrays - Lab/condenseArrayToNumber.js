function condense(array) {
  let condensed = [array.length - 1];
  let result = 0;

  if (array.length === 1) {
    console.log(array[0]);
  } else {
    while (array.length > 1) {
      for (let i = 0; i < array.length - 1; i++) {
        condensed[i] = Number(array[i]) + Number(array[i + 1]);
      }
      if (condensed.length === 2) {
        result = condensed[0] + condensed[1];
        break;
      }
      array = condensed;
      condensed = [array.length - 1];
    }
    console.log(result);
  }
}
condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
condense([1]);
