function matchPhoneNumber(phoneNumbers) {
  let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
  let phoneArray = [];

  let match = pattern.exec(phoneNumbers);

  while (match != null) {
    phoneArray.push(match[0]);

    match = pattern.exec(phoneNumbers);
  }

  console.log(phoneArray.join(', '));
}
matchPhoneNumber(
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
);
