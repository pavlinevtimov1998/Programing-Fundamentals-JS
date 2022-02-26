function songs(array) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];
  let numbOfSongs = Number(array.shift());
  let allTypeList = array.pop();

  for (let element of array) {
    let [typeList, name, time] = element.split("_");
    let song = new Song(typeList, name, time);
    songs.push(song);
  }

  if (allTypeList === "all") {
    songs.forEach((element) => console.log(element.name));
  } else {
    let filtered = songs.filter((element) => element.typeList === allTypeList);
    filtered.forEach((element) => console.log(element.name));
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
