function sumator (array){

    let charCodeOne = array.shift().charCodeAt(0);
    let charCodeTwo = array.shift().charCodeAt(0);

    let sum = 0;

    for(let char of array[0]){
        char = char.charCodeAt(0);
        if((charCodeOne > charCodeTwo) && (charCodeOne > char && charCodeTwo < char)){
            sum += char;
        } else if ((charCodeOne < charCodeTwo) && (charCodeOne < char && charCodeTwo > char)){
            sum += char;
        }
    }
    console.log(sum);



}
sumator (['.',
'@',
'dsg12gr5653feee5']);
console.log('-------');
sumator (['?',
'E',
'@ABCEF']);
console.log('-------');
sumator (['a',
'1',
'jfe392$#@j24ui9ne#@$']);