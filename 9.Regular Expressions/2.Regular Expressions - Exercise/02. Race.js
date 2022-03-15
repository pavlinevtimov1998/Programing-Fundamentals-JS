function race (array){

    let namePattern = /[A-Za-z]/g;
    let numbPattern = /\d/g;

    let racers = array.shift();

    let result = {};

    while(array[0] != 'end of race'){
        let line = array.shift();

        let name = line.match(namePattern);
        name = name.join('');
        let numbers = line.match(numbPattern).map(Number);

        numbers = numbers.reduce((a, b) => a + b);

        if(racers.includes(name)){
            if(result.hasOwnProperty(name) == false){
            result[name] = numbers;
            } else {
                result[name] += numbers;
            }
        }
    }

    let sorted = Object.entries(result).sort((a,b) => b[1] - a[1]).slice(0,3);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);

} 
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);
console.log('------------');
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']);