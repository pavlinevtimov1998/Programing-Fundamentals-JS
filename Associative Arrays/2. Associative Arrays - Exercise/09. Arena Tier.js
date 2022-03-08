function arenaTier(array) {
  let obj = {};

  while (array[0] != "Ave Cesar") {
    let tokens = array[0].split(" ");

    if (tokens[1] == "vs") {
      let firstGladiator = tokens[0];
      let secondGladiator = tokens[2];

      if (
        obj.hasOwnProperty(firstGladiator) &&
        obj.hasOwnProperty(secondGladiator)
      ) {
        let firstTechniques = obj[firstGladiator];
        let secondTechniques = obj[secondGladiator];

        for (let key in firstTechniques) {
          if (secondTechniques.hasOwnProperty(key)) {
            if (secondTechniques[key] > firstTechniques[key]) {
              delete obj[firstGladiator];
            } else if (secondTechniques[key] < firstTechniques[key]) {
              delete obj[secondGladiator];
            }
          }
        }
      }
    } else {
      let [gladiator, technique, skill] = array[0].split(" -> ");
      skill = Number(skill);
      if (obj.hasOwnProperty(gladiator) == false) {
        obj[gladiator] = {};
        obj[gladiator][technique] = skill;
      } else {
        if (obj[gladiator].hasOwnProperty(technique) == false) {
          obj[gladiator][technique] = skill;
        } else {
          let oldSkill = obj[gladiator][technique];
          if (oldSkill < skill) {
            obj[gladiator][technique] = skill;
          }
        }
      }
    }
    array.shift();
  }

  for (let key in obj) {
    let sum = "sum";
    let arr = Object.values(obj[key]);
    let res = arr.reduce((a, b) => a + b);
    if (key.hasOwnProperty(sum) == false) {
      obj[key][sum] = res;
    }
  }
  Object.entries(obj)
        .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
        .forEach((el) => {
            console.log(`${el[0]}: ${el[1].sum} skill`);
            delete el[1].sum;
            Object.entries(el[1])
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach((el) => {
                console.log(`- ${el[0]} <!> ${el[1]}`);
            })
        })
}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]);
