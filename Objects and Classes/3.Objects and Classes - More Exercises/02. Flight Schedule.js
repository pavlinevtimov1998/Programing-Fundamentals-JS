function flightShedule(array) {
  let myArray = [];
  if (array[2][0] === "Ready to fly") {
    for (let element of array[0]) {
      let [sector, ...destination] = element.split(" ");
      destination = destination.join(" ");
      let obj = {
        destination,
        status: "Ready to fly",
      };
      myArray.push(obj);
      for (let checkStatus of array[1]) {
        let [sector2, status] = checkStatus.split(" ");
        if (sector === sector2) {
          myArray[myArray.length - 1].status = status;
        }
      }
    }
    myArray.forEach((obj) => {
      if (obj.status === "Ready to fly") {
        console.log(
          `{ Destination: '${obj.destination}', Status: '${obj.status}' }`
        );
      }
    });
  } else {
    for (let element of array[0]) {
      let [sector, ...destination] = element.split(" ");
      destination = destination.join(" ");
      let obj = {
        destination,
        status: "Ready to fly",
      };
      myArray.push(obj);
      for (let checkStatus of array[1]) {
        let [sector2, status] = checkStatus.split(" ");
        if (sector === sector2) {
          myArray[myArray.length - 1].status = status;
        }
      }
    }
    myArray.forEach((obj) => {
      if (obj.status === "Cancelled") {
        console.log(
          `{ Destination: '${obj.destination}', Status: '${obj.status}' }`
        );
      }
    });
  }
}
flightShedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
