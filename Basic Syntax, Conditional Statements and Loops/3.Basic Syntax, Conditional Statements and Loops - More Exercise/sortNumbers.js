function srotNumber(n1, n2, n3) {
  let num1 = Number(n1);
  let num2 = Number(n2);
  let num3 = Number(n3);

  if (num1 > num2 && num1 > num3) {
    console.log(num1);
    if (num2 > num3) {
      console.log(num2);
      console.log(num3);
    } else {
      console.log(num3);
      console.log(num2);
    }
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
    if (num1 > num3) {
      console.log(num1);
      console.log(num3);
    } else {
      console.log(num3);
      console.log(num1);
    }
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3);
    if (num1 > num2) {
      console.log(num1);
      console.log(num2);
    } else {
      console.log(num2);
      console.log(num1);
    }
  }
}
srotNumber(2, 1, 3);
srotNumber(-2, 1, 3);
/*if (num1 > num2 && num1 > num3){
            System.out.println(num1);
            if (num2 > num3) {
                System.out.println(num2);
                System.out.println(num3);
            } else {
                System.out.println(num3);
                System.out.println(num2);
            }
        } else if (num2 > num1 && num2 > num3) {
            System.out.println(num2);
            if (num1 > num3) {
                System.out.println(num1);
                System.out.println(num3);
            } else {
                System.out.println(num3);
                System.out.println(num1);
            }
        } else if (num3 > num1 && num3 > num2) {
            System.out.println(num3);
            if (num1 > num2) {
                System.out.println(num1);
                System.out.println(num2);
            } else {*/
