function bookShelf(array) {
  let objID = {};
  let objBooks = {};

  for (let el of array) {
    if (el.includes("->")) {
      let [ID, genre] = el.split(" -> ");
      if (objID.hasOwnProperty(ID) == false) {
        objID[ID] = genre;
        objBooks[genre] = [];
      }
    }
    if (el.includes(": ")) {
      let [bookTitle, tokens] = el.split(": ");
      let [author, bookGenre] = tokens.split(", ");
      for (let key in objID) {
        if (objID[key] == bookGenre) {
          objBooks[bookGenre].push([bookTitle, author]);
        }
      }
    }
  }

  let sortedBooks = Object.entries(objBooks).sort(
    (a, b) => b[1].length - a[1].length
  );

  for (let [el, bookAndAuthor] of sortedBooks) {
    for (let key in objID) {
      if (objID[key] === el) {
        console.log(`${key} ${el}: ${bookAndAuthor.length}`);
        for (let [book, author] of bookAndAuthor) {
          console.log(`--> ${book}: ${author}`);
        }
      }
    }
  }
}
bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);
console.log("----------------------");
bookShelf([
  "1 -> mystery",
  "2 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Lions and Rats: Gabe Roads, history",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
]);
