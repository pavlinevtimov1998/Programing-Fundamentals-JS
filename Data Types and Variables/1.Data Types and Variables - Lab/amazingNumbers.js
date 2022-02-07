function amazing(numb) {
  let str = "" + numb;
  let sum = 0;
  for (i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  sum += "";
  let result = sum.includes(9);

  console.log(result ? `${str} Amazing? True` : `${str} Amazing? False`);
}
amazing(1232);
