/*You are given a group of people, the type of the group, and the day of the week they are going to stay.
 Based on that information calculate how much they have to pay and print that price on the console. 
 Use the table below. In each cell is the price for a single person. 

The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point.

          Friday	Saturday	Sunday
Students	8.45	9.80	10.46
Business	10.90	15.60	16
Regular     15  	20	    22.50

There are also discounts based on some conditions:
⦁	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
⦁	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
⦁	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
Note: You should reduce the prices in that EXACT order.
Examples
Input	Output
30,
"Students",
"Sunday"	Total price: 266.73
40,
"Regular",
"Saturday"	Total price: 800.00
*/

function vacation(people, status, day) {
  let price;
  let businesPeople;

  switch (status) {
    case "Students":
      if (day === "Friday") {
        price = 8.45;
        price *= people;
      } else if (day === "Saturday") {
        price = 9.8;
        price *= people;
      } else if (day === "Sunday") {
        price = 10.46;
        price *= people;
      }
      break;
    case "Business":
      if (day === "Friday") {
        if (people >= 100) {
          price = 10.9;
          businesPeople = people -= 10;
          price *= people;
        } else {
          price = 10.9;
          price *= people;
        }
      } else if (day === "Saturday") {
        if (people >= 100) {
          price = 15.6;
          businesPeople = people -= 10;
          price *= people;
        } else {
          price = 15.6;
          price *= people;
        }
      } else if (day === "Sunday") {
        if (people >= 100) {
          price = 16;
          businesPeople = people -= 10;
          price *= people;
        } else {
          price = 16;
          price *= people;
        }
      }
      break;
    case "Regular":
      if (day === "Friday") {
        price = 15;
        price *= people;
      } else if (day === "Saturday") {
        price = 20;
        price *= people;
      } else if (day === "Sunday") {
        price = 22.5;
        price *= people;
      }
      break;
  }

  if (status === "Students" && people >= 30) {
    let disc1 = price * 0.15;
    price -= disc1;
  } else if (status === "Business" && people >= 100) {
    let disc1 = price * 0.15;
    price -= disc1;
  } else if (status === "Regular" && people >= 10 && people <= 20) {
    let disc2 = price * 0.05;
    price -= disc2;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(100, "Business", "Saturday");
