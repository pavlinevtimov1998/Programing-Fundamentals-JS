function shootForTheWin(array) {
  let myArray = array;
  let secuenceOfNumb = myArray[0].split(" ");
  myArray.shift();
  let count = 0;

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === "End") {
      console.log(`Shot targets: ${count} -> ${secuenceOfNumb.join(" ")}`);
      break;
    }
    let curIndex = Number(myArray[i]);
    for (let j = 0; j < secuenceOfNumb.length; j++) {
      let numb = Number(secuenceOfNumb[j]);
      if (curIndex === j) {
        count++;
        secuenceOfNumb[j] = -1;
        for (let p = 0; p < secuenceOfNumb.length; p++) {
          let n = Number(secuenceOfNumb[p]);
          if (numb < n) {
            n -= numb;
            secuenceOfNumb.splice(p, 1, n);
          } else if (numb >= n && n !== -1) {
            n += numb;
            secuenceOfNumb.splice(p, 1, n);
          }
        }
      }
    }
  }
}
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
/*First, we shoot the target on index 0. It becomes equal to -1, 
and we start going through the rest of the targets. Since 50 is more than 24,
 we reduce it to 26 and 36 to 12 and 70 to 46. The sequence looks like that:
-1 26 12 46
The following index is invalid, so we don't do anything. Index 3 is valid,
 and after the operations, our sequence should look like that:
-1 72 58 -1
Then we take the first index with value 72, and our sequence looks like that:
-1 -1 130 -1
Then we print the result after the "End" command.*/
