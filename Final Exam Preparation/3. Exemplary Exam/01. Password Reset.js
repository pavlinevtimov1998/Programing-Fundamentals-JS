function passwordReset(array) {

    let string = array.shift();
    

    while(array[0] !== 'Done'){
        let element = array.shift()
        if(element == 'TakeOdd'){
            let oddIndices = '';
            for (let i = 0; i < string.length; i++) {
                if(i % 2 !== 0 && i !== 0){
                    oddIndices += string[i];
                }
            }
            string = oddIndices;
            console.log(string);
        } else if (element.includes('Cut')){
            let [_, index, lngt] = element.split(' ');
            index = Number(index);
            lngt = Number(lngt);
            let firstPart = string.substring(0, index);
            let lastPart = string.substring(index + lngt);
            string = firstPart + lastPart; 
            console.log(string);
        } else if (element.includes('Substitute')){
            let [_, oldChar, newChar] = element.split(' ');
            if(string.includes(oldChar)){
                let regex = new RegExp(oldChar, 'g');
                string = string.replace(regex, newChar);
                console.log(string);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }

    console.log(`Your password is: ${string}`);

}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
console.log("---------");
passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
