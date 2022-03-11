function cutAndReverse (reversedText) {

    let middle = reversedText.length / 2;

    let first = reversedText
    .substring(0, middle)
    .split('')
    .reverse()
    .join('');

    let second = reversedText
    .substring(middle)
    .split('')
    .reverse()
    .join('');

    console.log(first);
    console.log(second);


}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('--------------');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');