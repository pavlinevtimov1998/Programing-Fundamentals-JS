function matchFullNames(text) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let array = [];

  let match = pattern.exec(text);

  while (match !== null) {
    array.push(match[0]);
    match = pattern.exec(text);
  }

  console.log(array.join(" "));
}
matchFullNames(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
