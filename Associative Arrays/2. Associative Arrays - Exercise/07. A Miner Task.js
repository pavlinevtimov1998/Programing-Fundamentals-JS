function minnerTask(array) {

    let obj = {};

    for (let i = 0; i < array.length; i+=2) {
        let resource = array[i];
        if(obj.hasOwnProperty(resource) == false){
            obj[resource] = Number(array[i+1]);
        } else {
            obj[resource] += Number(array[i+1]);
        }
    }

    Object.entries(obj).forEach((element) => {
        console.log(element[0], '->', element[1]);
    });

}
minnerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);
