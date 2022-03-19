function comments(input) {
  let users = [];
  let articles = [];
  let comments = new Map();

  for (let element of input) {
    if (element.includes("user ")) {
      let [_, userName] = element.split(" ");
      users.push(userName);
    } else if (element.includes("article ")) {
      let [_, articleName] = element.split(" ");
      articles.push(articleName);
    } else {
      let tokens = element.split(": ");
      let user = tokens[0].split(" ")[0];
      let article = tokens[0].split(" ")[3];
      let commentContent = tokens[1].split(", ").join(" - ");

      if (users.includes(user) && articles.includes(article)) {
        let contentString = "--- From user " + user + ": " + commentContent;

        if (!comments.has(article)) {
          comments.set(article, []);
        }
        comments.get(article).push(contentString);
      }
    }
  }

  let sortedComments = [...comments.entries()]
  .sort((a, b) => b[1].length - a[1].length);

  for(let el of sortedComments){
      let article = el[0];
      console.log(`Comments on ${article}`);
      let comments = el[1]
      .sort((a, b) => b.substring(15).localeCompare(a.substring(15)))
      .forEach(element => console.log(element));
  }

}
comments([
  "user aUser123",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
console.log("-------------");
comments([
  "user Mark",
  "Mark posts on someArticle: NoTitle, stupidComment",
  "article Bobby",
  "article Steven",
  "user Liam",
  "user Henry",
  "Mark posts on Bobby: Is, I do really like them",
  "Mark posts on Steven: title, Run",
  "someUser posts on Movies: Like",
]);
