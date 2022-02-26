function towns(array) {
  let obj = {};

  for (let element of array) {
    let [town, latitude, longitude] = element.split(" | ");
    obj.town = town;
    latitude = Number(latitude);
    longitude = Number(longitude);
    obj.latitude = latitude.toFixed(2);
    obj.longitude = longitude.toFixed(2);
    console.log(obj);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
