function stringSubstring (word, text) {

    text = text.split(' ');

    for(let token of text) {
        if(token.toLocaleLowerCase() == word.toLocaleLowerCase()){
            return word
        }
    }

    console.log(word, 'not found!');


}
stringSubstring('javascript',
'JavaScript is the best programming language');
console.log('---------');
stringSubstring('python',
'JavaScript is the best programming language');