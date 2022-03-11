function hashTag(text) {
  text = text.split(" ");

  for (let el of text) {
    if (el.startsWith("#") && el.length > 1) {
        let code = el.charCodeAt(1);
        if((code >= 65 && code <= 90) || (code >=97 && code <= 122)){
      console.log(el.slice(1));
        }
    }
  }
}
hashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
console.log("--------");
hashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
