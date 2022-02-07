function gramophone(band, album, song) {
  let rotation = 2.5;
  let duration = (album.length * band.length * song.length) / 2;
  let result = duration / rotation;
  console.log(`The plate was rotated ${Math.ceil(result)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
