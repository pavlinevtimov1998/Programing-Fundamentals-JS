function plantDiscovery (array){

    let numb = Number(array.shift());
    let obj = {};

    for (let i = 0; i < numb; i++) {
        let line = array.shift();
        let [plant, rarity] = line.split('<->');

        obj[plant.trim()] = {};
        obj[plant]['rarity'] =  Number(rarity);
        obj[plant]['rating'] = [0];

        
    }

    while (array[0] != 'Exhibition'){
        let line = array.shift();

        let tokens = line.split(':');
        let command = tokens[0];
        let plant;
        let ratingOrRarity;
        if(command == 'Reset'){
            plant = tokens[1];
        } else {
            [plant, ratingOrRarity] = tokens[1].split(' - ');
        }

        plant = plant.trim();
        if(obj.hasOwnProperty(plant) == false){
            console.log('error');
            continue;
        }
        
        switch(command.trim()){
            case 'Rate':
                if(obj[plant]['rating'][0] == 0){
                    obj[plant]['rating'].shift();
                }
            obj[plant]['rating'].push(Number(ratingOrRarity));
            break;
            case 'Update':
            obj[plant]['rarity'] = Number(ratingOrRarity);
            break;
            case 'Reset':
            obj[plant]['rating'] = [0];
            break;
            default:
                console.log('error');
                break;
        }
    }
    if(Object.entries(obj).length > 0){
    
    console.log("Plants for the exhibition:");
    for(let key in obj){
        let average = obj[key]['rating'].reduce((a, b) => (a + b) / 2);
        console.log(`- ${key}; Rarity: ${obj[key]['rarity']}; Rating: ${average.toFixed(2)}`);
    }
    }
}
plantDiscovery(["3",
"Candelabra<->10",
"Oahu<->10",
'asd<->0',
"Rate: Oahu - 7",
'Rate: asd - 10',
'oho: asd - 7',
"Rate: Candelabra - 6",
"Exhibition"]);