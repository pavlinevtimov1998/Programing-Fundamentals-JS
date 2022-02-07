function leng(country) {
  let eng = "English";
  let span = "Spanish";
  let unk = "unknown";

  if (country === "England" || country === "USA") {
    console.log(eng);
  } else if (
    country === "Spain" ||
    country === "Argentina" ||
    country === "Mexico"
  ) {
    console.log(span);
  } else {
    console.log(unk);
  }
}
leng("Mexico");
