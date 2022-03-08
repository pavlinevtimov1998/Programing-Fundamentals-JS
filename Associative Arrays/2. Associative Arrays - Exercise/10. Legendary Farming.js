function legendaryFarming(input) {
  let materialAndQuantity = input.toLowerCase().split(" ");
  let obj = { fragments: 0, shards: 0, motes: 0 };
  let junkMaterials = {};
  let isBreak = false;
  while (!isBreak && materialAndQuantity.length > 0) {
    let quantity = Number(materialAndQuantity.shift());
    let material = materialAndQuantity.shift();
    switch (material) {
      case "shards":
        obj[material] += quantity;
        if (obj[material] >= 250) {
          console.log(`Shadowmourne obtained!`);
          obj[material] -= 250;
          isBreak = true;
        }
        break;
      case "fragments":
        obj[material] += quantity;
        if (obj[material] >= 250) {
          console.log(`Valanyr obtained!`);
          obj[material] -= 250;
          isBreak = true;
        }
        break;
      case "motes":
        obj[material] += quantity;
        if (obj[material] >= 250) {
          console.log(`Dragonwrath obtained!`);
          obj[material] -= 250;
          isBreak = true;
        }
        break;
      default:
        if (!junkMaterials.hasOwnProperty(material)) {
          junkMaterials[material] = 0;
        }
        junkMaterials[material] += quantity;
        break;
    }
  }
  Object.entries(obj)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach((item) => {
      console.log(`${item[0]}: ${item[1]}`);
    });

  Object.entries(junkMaterials)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((item) => {
      console.log(`${item[0]}: ${item[1]}`);
    });
}
legendaryFarming("255 fragments");
