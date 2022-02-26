function inventory(array) {
  let arrOfHeroes = [];

  for (let element of array) {
    let [name, level, items] = element.split(" / ");
    let arr = [];
    arr.push(items);
    let obj = {
      name,
      level,
      items,
    };
    arrOfHeroes.push(obj);
  }

  arrOfHeroes.sort((a, b) => a.level - b.level);

  arrOfHeroes.forEach((element) => {
    console.log(`Hero: ${element.name}`);
    console.log(`level => ${element.level}`);
    console.log(`items => ${element.items}`);
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
