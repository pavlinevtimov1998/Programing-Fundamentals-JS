function theBiscuitFactory(arr) {
  let biscuitsPerDay = Number(arr.shift());
  let workers = Number(arr.shift());
  let biscuitsFor30Days = Number(arr.shift());

  let count = 0;
  let result = 0;

  for (let i = 1; i <= 30; i++) {
    count++;
    let res = biscuitsPerDay * workers;
    if (count % 3 === 0) {
      res = Math.floor(res - res * 0.25);
    }
    result += res;
  }
  console.log(`You have produced ${result} biscuits for the past month.`);

  if (result > biscuitsFor30Days) {
    let percentage = result - biscuitsFor30Days;
    percentage = (percentage / biscuitsFor30Days) * 100;
    console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
  } else {
    let percentage = biscuitsFor30Days - result;
    percentage = (percentage / biscuitsFor30Days) * 100;
    console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
  }
}
theBiscuitFactory(["78", "8", "16000"]);
theBiscuitFactory(["65", "12", "26000"]);
theBiscuitFactory(["163", "16", "67020"]);
