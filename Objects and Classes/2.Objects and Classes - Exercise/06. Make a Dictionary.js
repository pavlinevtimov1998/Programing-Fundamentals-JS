function makingDictionary(array) {
  let dictionary = {};

  for (let jsonString of array) {
    let obj = JSON.parse(jsonString);
    dictionary = Object.assign(dictionary, obj);
  }

  let sortedKeys = Object.keys(dictionary);
  sortedKeys.sort((a, b) => a.localeCompare(b));

  for (let key of sortedKeys) {
    let def = dictionary[key];
    console.log(`Term: ${key} => Definition: ${def}`);
  }
}
makingDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
