function softUniReception(array) {
  let numberOfStudents = Number(array.pop());
  let countHours = 0;
  let everyFourthHour = 0;

  while (numberOfStudents > 0) {
    if (everyFourthHour === 3) {
      everyFourthHour = 0;
      countHours++;
      continue;
    }
    for (let element of array) {
      element = Number(element);
      numberOfStudents -= element;
    }
    countHours++;
    everyFourthHour++;
  }
  console.log(`Time needed: ${countHours}h.`);
}
softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
softUniReception(["3", "2", "5", "40"]);
