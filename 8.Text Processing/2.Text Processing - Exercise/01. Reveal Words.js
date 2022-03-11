function revealWords (words, text) {

    words = words.split(', ');

    for (let el of words) {
        let censored = '*'.repeat(el.length);

        if(text.includes(censored)){
            text = text.replace(censored, el);
        }
        
        
    }
    console.log(text);


}
revealWords ('great',
'softuni is ***** place for learning new programming languages');
console.log('-------');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');