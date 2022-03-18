function pirates(array) {
    
  let obj = {};

  while (array[0] != "Sail") {
    let [town, population, gold] = array.shift().split("||");
    gold = Number(gold);
    population = Number(population);

    if (obj.hasOwnProperty(town) == false) {
      obj[town] = {
        population: population,
        gold: gold,
      };
    } else {
      obj[town]["population"] += population;
      obj[town]["gold"] += gold;
    }
  }

  array.shift();

  while (array[0] != "End") {
    let tokens = array.shift().split("=>");

    if (tokens[0] == "Plunder") {
      let [_, town, people, gold] = tokens;
      people = Number(people);
      gold = Number(gold);
      console.log(
        `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );
      obj[town]["population"] -= people;
      obj[town]["gold"] -= gold;
      if (obj[town]["population"] == 0 || obj[town]["gold"] == 0) {
        delete obj[town];
        console.log(`${town} has been wiped off the map!`);
      }
    } else if (tokens[0] == "Prosper") {
      let [_, town, gold] = tokens;
      gold = Number(gold);
      if (gold < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        obj[town]["gold"] += gold;
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${obj[town]["gold"]} gold.`
        );
      }
    }
  }

  let count = Object.keys(obj).length;
  
  if (count > 0) {
    console.log(
      `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
    );
    for(let key in obj){
        console.log(`${key} -> Population: ${obj[key]['population']} citizens, Gold: ${obj[key]['gold']} kg`);
    }
  } else {
      console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
  }

}
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
console.log("----------");
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
