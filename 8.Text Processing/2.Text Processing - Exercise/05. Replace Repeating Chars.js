function replaceRepeating(chars) {

    let output = '';

    for(let char of chars){
        if(output[output.length - 1] !== char){
            output += char;
        }
    }

    console.log(output);


}
replaceRepeating('aaaaabbbbbcdddeeeedssaa');
console.log('--------');
replaceRepeating('qqqwerqwecccwd');