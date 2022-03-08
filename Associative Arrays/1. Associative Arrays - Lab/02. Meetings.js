function meetings(array) {
  let obj = {};

  for (let element of array) {
    let [day, name] = element.split(" ");

    if (!obj.hasOwnProperty(day)) {
      obj[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }

  for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
