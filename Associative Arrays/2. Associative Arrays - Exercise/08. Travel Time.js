function travelTime (array) {

    let obj = {};

    for(let element of array) {
        let [country, town, cost] = element.split(' > ');
        cost = Number(cost);

        if(obj.hasOwnProperty(country) == false){
            obj[country] = new Map();
            obj[country].set(town, cost);
        } else {
            if(obj[country].has(town)){
                let oldCost = obj[country].get(town);
                if(oldCost > cost){
                    obj[country].set(town, cost);
                } 
            } else {
                obj[country].set(town, cost);
            }
        }
    }

    let sorted = Object.entries(obj)
    .sort((a,b) => a[0].localeCompare(b[0]));

    

    for(let element of sorted) {
            console.log(element[0], '->',result(element[1]));
    }

    function result (map) {
        let res = '';
        let sortedArray = Array.from(map);
        sortedArray.sort((a, b) => a[1] - b[1]);
        for(let element of sortedArray){
            res += `${element[0]} -> ${element[1]} `
        }
        return res;
    }

    

}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]);