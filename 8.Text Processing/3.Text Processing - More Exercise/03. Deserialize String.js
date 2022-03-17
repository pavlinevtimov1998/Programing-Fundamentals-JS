function deserializeString(array) {
  let arr = [];

  while (array[0] != "end") {

    let tokens = array.shift().split(":");
    let char = tokens[0];
    let indexes = tokens[1].split("/").map(Number);

    for (let i = 0; i < indexes.length; i++) {
        let index = indexes[i];
      if (index <= arr.length) {
        arr.splice(index,1 , char);
      } else {
          arr.length += index - arr.length;
          arr.splice(index, 0, char);
      }

    }

  }
  console.log(arr.join(''));
}
deserializeString(["a:0/2/4/6", "b:1/3/5", "end"]);
console.log("------");
deserializeString([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);
