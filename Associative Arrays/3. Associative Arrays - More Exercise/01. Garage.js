function garage (array) {
    let garagesMap = new Map();
    for (let element of array) {
        let [garage, carKeyValues] = element.split(' - ');
        if (!garagesMap.has(garage)) {
            garagesMap.set(garage, [carKeyValues]);
        } else {
            let availableCars = garagesMap.get(garage);
            availableCars.push(carKeyValues);
            garagesMap.set(garage, availableCars);
        }
    }
    let sortedGarages = [...garagesMap.entries()].sort((a, b) => a[0] - b[0]);
    let output = '';
    for (let [currGarage, currCarKeyValue] of sortedGarages) {
        output += `Garage № ${currGarage}\n`;
        for (let currCarProperties of currCarKeyValue) {
            currCarProperties = currCarProperties.replace(/: /g, ' - ');
            output += `--- ${currCarProperties}\n`;
        }
    }
    console.log(output);
}

garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
