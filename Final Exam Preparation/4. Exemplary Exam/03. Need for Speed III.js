function needForspeed(array) {
  let n = array.shift();

  let carObject = {};

  for (let i = 0; i < n; i++) {
    let [car, mileage, fuel] = array.shift().split("|");

    carObject[car] = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
  }

  while (array[0] !== "Stop") {
    let [command, ...tokens] = array.shift().split(" : ");

    switch (command) {
      case "Drive":
        drive(carObject, tokens);
        break;
      case "Refuel":
        refuel(carObject, tokens);
        break;
      case "Revert":
        revert(carObject, tokens);
        break;
    }
  }

  for (let key in carObject) {
    console.log(
      `${key} -> Mileage: ${carObject[key]["mileage"]} kms, Fuel in the tank: ${carObject[key]["fuel"]} lt.`
    );
  }

  function drive(obj, tokens) {
    let [car, distance, neededFuel] = tokens;
    distance = Number(distance);
    neededFuel = Number(neededFuel);

    if (obj[car]["fuel"] - neededFuel < 0) {
      console.log("Not enough fuel to make that ride");
    } else {
      obj[car]["mileage"] += distance;
      obj[car]["fuel"] -= neededFuel;
      console.log(
        `${car} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`
      );
    }
    if (obj[car]["mileage"] >= 100000) {
      delete obj[car];
      console.log(`Time to sell the ${car}!`);
    }
    return obj;
  }
  function refuel(obj, tokens) {
    let [car, fuel] = tokens;
    fuel = Number(fuel);

    if (obj[car]["fuel"] + fuel > 75) {
      let existing = 75 - obj[car]["fuel"];
      obj[car]["fuel"] = 75;
      console.log(`${car} refueled with ${existing} liters`);
      return obj;
    } else {
      obj[car]["fuel"] += fuel;
      console.log(`${car} refueled with ${fuel} liters`);
      return obj;
    }
  }
  function revert(obj, tokens) {
    let [car, kilometers] = tokens;
    kilometers = Number(kilometers);
    obj[car]["mileage"] -= kilometers;

    if (obj[car]["mileage"] < 10000) {
      obj[car]["mileage"] = 10000;
      return obj;
    }
    console.log(`${car} mileage decreased by ${kilometers} kilometers`);

    return obj;
  }
}
needForspeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
console.log("--------");
needForspeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
