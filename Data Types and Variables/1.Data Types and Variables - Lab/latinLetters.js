function latinLetters(num) {
  for (let i = 0; i < num; i++) {
    let a1 = String.fromCharCode(97 + i);
    for (let j = 0; j < num; j++) {
      let a2 = String.fromCharCode(97 + j);
      for (let k = 0; k < num; k++) {
        let a3 = String.fromCharCode(97 + k);
        console.log(`${a1}${a2}${a3}`);
      }
    }
  }
}
latinLetters(2);
