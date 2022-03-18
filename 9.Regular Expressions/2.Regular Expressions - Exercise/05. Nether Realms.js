function netherRealms(string) {
  let asciiPatern = /([^\d\+\-*\/\.])/g;
  let numbPattern = /([+|-]?[0-9]+[.]*?[0-9]+|[+|-]?[0-9]+)/g;
  let multiplyAndDividePatern = /[\*\/]/g;

  let obj = {};

  let namesArray = string.split(/[, ]+/g);

  for (let name of namesArray) {
    let health = 0;
    let matchedChars = name.match(asciiPatern);
    if (matchedChars !== null) {
      for (let i = 0; i < matchedChars.length; i++) {
        let charCode = matchedChars[i].charCodeAt(0);
        health += charCode;
      }
    }
    obj[name] = {
      health: health,
    };
    let matchedNumbs = name.match(numbPattern);
    let damage = 0;
    if (matchedNumbs !== null) {
      for (let j = 0; j < matchedNumbs.length; j++) {
        let num = matchedNumbs[j];
        damage += Number(num);
      }
    }

    let matchedOperations = name.match(multiplyAndDividePatern);
    if (matchedOperations !== null) {
      for (let p = 0; p < matchedOperations.length; p++) {
        let operation = matchedOperations[p];
        if (operation === "*") {
          damage *= 2;
        } else {
          damage /= 2;
        }
      }
    }
    obj[name]["damage"] = damage.toFixed(2);
  }

  let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

  for (let el of sorted) {
    console.log(
      `${el[0]} - ${el[1]["health"]} health, ${el[1]["damage"]} damage`
    );
  }
}
netherRealms("M3ph-0.5s-0.5t0.0**");
console.log("---------");
netherRealms("M3ph1st0**, Azazel");
