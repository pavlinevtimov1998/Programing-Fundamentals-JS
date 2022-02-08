function smallestTwoNumbers(array) {
  let sortedInAscending = array.sort((a, b) => {
    return a - b;
  });

  let smallest = sortedInAscending.slice(0, 2);

  console.log(smallest.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);
