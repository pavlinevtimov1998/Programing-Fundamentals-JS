function schoolGrades(array) {
  let map = new Map();

  for (let el of array) {
    let [name, ...grades] = el.split(" ");

    if (!map.has(name)) {
      map.set(name, grades);
    } else {
      let existing = map.get(name);
      existing.push(...grades);
      map.set(name, existing);
    }
  }

  let sorted = Array.from(map);
  sorted.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  for (let [name, grades] of sorted) {
    let average = 0;
    for (let el of grades) {
      el = Number(el);
      average += el;
    }
    average /= grades.length;
    console.log(`${name}: ${average.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
