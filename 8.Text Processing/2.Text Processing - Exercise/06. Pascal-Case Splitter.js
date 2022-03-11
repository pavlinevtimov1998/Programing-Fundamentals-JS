function pascalCaseSplitter (text) {

    let output = ' ';

    for(let i = 0;i < text.length; i++){
        if(text[i] !== text[i].toLocaleUpperCase()){
            output += text[i];
        } else {
            output += ' ' + text[i];
        }
    }

    output = output.trim();

    console.log(output.split(' ').join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('-------------');
pascalCaseSplitter('HoldTheDoor');
console.log('-------------');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');