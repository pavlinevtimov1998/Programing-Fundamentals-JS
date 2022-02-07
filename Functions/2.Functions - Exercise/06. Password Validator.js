function passwordValidator(password) {
  function isLengthBetweenSixAndTen(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      return false;
    }
  }

  function isConsistOnlyLettersAndDigits(pass) {
    for (let char of pass) {
      let charCode = char.charCodeAt(0);
      if (
        !(charCode >= 48 && charCode <= 57) &&
        !(charCode >= 65 && charCode <= 90) &&
        !(charCode >= 97 && charCode <= 122)
      ) {
        return false;
      }
    }
    return true;
  }

  function isHaveAtLeastTwoDigits(pass) {
    let count = 0;
    for (let char of pass) {
      let charCode = char.charCodeAt(0);
      if (charCode >= 48 && charCode <= 57) {
        count++;
      }
    }

    return count >= 2;
  }

  let isLengthInRange = isLengthBetweenSixAndTen(password);
  let isConsistOnlyNeeded = isConsistOnlyLettersAndDigits(password);
  let isHaveLeastDigits = isHaveAtLeastTwoDigits(password);

  if (isLengthInRange && isConsistOnlyNeeded && isHaveLeastDigits) {
    console.log("Password is valid");
  }

  if (!isLengthInRange) {
    console.log("Password must be between 6 and 10 characters");
  }

  if (!isConsistOnlyNeeded) {
    console.log("Password must consist only of letters and digits");
  }

  if (!isHaveLeastDigits) {
    console.log(`Password must have at least 2 digits`);
  }
}
passwordValidator("Pa$s$s");
