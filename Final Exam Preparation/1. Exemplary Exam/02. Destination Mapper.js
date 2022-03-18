function destinationMapper (string){

    let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g;

    let arr = [];

    let word = pattern.exec(string);

    while(word != null){
    arr.push(word.groups['location']);
    word = pattern.exec(string);
    }

    if(arr.length > 0){
        let sum = 0;
        for(let element of arr){
            sum += element.length;
        }
        console.log('Destinations:', arr.join(', '));
        console.log('Travel Points:', sum);
    } else {
        console.log('Destinations:');
        console.log('Travel Points:', 0);
    }
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")