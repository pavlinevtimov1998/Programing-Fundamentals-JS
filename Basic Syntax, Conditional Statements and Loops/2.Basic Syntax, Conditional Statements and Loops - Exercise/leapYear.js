/*
Write a JS function to check whether a year is a leap. 
Leap years are either divisible by 4 but not by 100 or are divisible by 400. 
The output should be following:
⦁	If the year is a leap, print: "yes"
⦁	Otherwise, print: "no"
Examples
Input	Output
1984	yes
2003	no
*/

function leapYear(year) {
  let divisible = true;
  for (let i = 0; i <= year; i++) {
    if ((i === 4 && year % i === 0) || (i === 400 && year % i === 0)) {
      divisible = false;
    } else if (year % 100 === 0 && i === 400 && year % i !== 0) {
      divisible = true;
    }
  }

  if (divisible) {
    console.log("no");
  } else {
    console.log("yes");
  }
}
leapYear(1900);
