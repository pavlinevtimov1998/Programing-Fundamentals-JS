function encryptingPassword(array) {
  let pattern =
    /^([\w\W]+)\>(?<one>\d{3})\|(?<two>[a-z]{3})\|(?<three>[A-Z]{3})\|(?<four>[^\<\>]{3})\<(\1)$/m;

  let numb = Number(array.shift());

  for (let i = 0; i < numb; i++) {
    let password = array.shift();
    let match = pattern.exec(password);
    if (match !== null) {
      let pass = match[2] + match[3] + match[4] + match[5];
      console.log(`Password: ${pass}`);
    } else {
      console.log("Try another password!");
    }
  }
}
encryptingPassword([
  "3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<###",
  "$$<111|noo|NOPE|<<>$$",
]);
console.log("-------");
encryptingPassword([
  "5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*",
]);
