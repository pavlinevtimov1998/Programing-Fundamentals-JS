function slise(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Uninstall WoW") {
      array.splice(i, 1);
    }
  }
  console.log(array);
}
slise([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
// Премахване на определен индекс от масива!!!
