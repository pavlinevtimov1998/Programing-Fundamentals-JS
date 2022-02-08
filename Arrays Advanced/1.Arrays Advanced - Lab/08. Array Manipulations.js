function arrayManipulations(input) {
  let myArray = input.shift().split(" ").map(Number);

  for (let i = 0; i < input.length; i++) {
    let [command, number, index] = input[i].split(" ");
    number = Number(number);
    index = Number(index);

    if (command == "Add") {
      add(number);
    } else if (command == "Remove") {
      remove(number);
    } else if (command == "RemoveAt") {
      removeAt(number);
    } else if (command == "Insert") {
      insert(number, index);
    }
  }

  function add(num) {
    myArray.push(num);
  }
  function remove(num) {
    myArray = myArray.filter((el) => el !== num);
  }
  function removeAt(num) {
    myArray.splice(num, 1);
  }
  function insert(num, index) {
    myArray.splice(index, 0, num);
  }

  console.log(myArray.join(" "));
}
arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
