function login(aray) {
  let index = 0;
  let username = aray[index];
  index++;
  let password = aray[index];
  index++;
  let count = 0;
  let pas = "";

  for (let i = 0; i <= username.length - 1; i++) {
    for (let j = password.length - 1; j >= 0; j--) {
      if (username[i] === password[j]) {
        pas += password[j];
        i++;
      } else {
        count++;
        if (count >= 4) {
          break;
        }
        password = aray[index];
        index++;
        i--;
        console.log("Incorrect password. Try again.");
        break;
      }
    }

    if (pas === username) {
      console.log(`User ${username} logged in.`);
      break;
    }
    if (count >= 4) {
      console.log(`User ${username} blocked!`);
      break;
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
