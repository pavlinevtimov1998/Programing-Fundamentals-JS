function starEnigma (array) {

    let n = Number(array.shift());
    let pattern = /[star]/g;

    let arr = [];

    for(let i = 0; i < n; i++){
        let count = 0;
        let splitString = array[i].split('');

        for(let j = 0; j < splitString.length; j++){
            let char = splitString[j].toLocaleLowerCase();
            
            if(char.match(pattern)){
                count++;
            }
        }

        for(let p = 0; p < splitString.length; p++){
            let code = splitString[p].charCodeAt(0);
            splitString[p] = String.fromCharCode(code - count);
        }

        let res = splitString.join('');
        arr.push(res);
    }

    let newPattern = /@(?<name>[A-Za-z]+)[^@:!\->]*:(?<population>[0-9]+)[^@:!\->]*!(?<command>[AD])![^@:!\->]*->(?<soldireCount>[0-9]+)/g;
    let result = newPattern.exec(arr);
    let atackedcount = 0;
    let atackedPlanets = [];
    let destroyedCount = 0;
    let destroyedPlanets = [];

    while(result != null){
        let name = result.groups['name'];
        let command = result.groups['command'];

        if(command == 'A'){
            atackedcount++;
            atackedPlanets.push(name);
        } else if (command == 'D'){
            destroyedCount++;
            destroyedPlanets.push(name);
        }

        result = newPattern.exec(arr);
    }

    console.log("Attacked planets:", atackedcount);
    if(atackedPlanets.length > 0){
        let sorted = atackedPlanets.sort((a, b) => a.localeCompare(b));
        sorted.forEach(el => console.log('->', el))
    }
    console.log("Destroyed planets:", destroyedCount);
    if(destroyedPlanets.length > 0){
        let sorted = destroyedPlanets.sort((a, b) => a.localeCompare(b));
        sorted.forEach(el => console.log('->', el))
    }


}
starEnigma (['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']);
console.log('---------');
starEnigma (['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']);