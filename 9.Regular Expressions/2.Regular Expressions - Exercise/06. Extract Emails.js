function emailsExtracting(text) {

    let pattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-][A-Za-z]+)+))(\b|(?=\s))/g;

    let array = text.match(pattern);
    
    if(array.length > 0){
        array.forEach(element => {
            console.log(element);
        });
    }




}
emailsExtracting("Please contact us at: support@github.com.");
console.log("------");
emailsExtracting(
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information."
);
console.log("------");
emailsExtracting(
  "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de."
);
