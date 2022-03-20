function softUniStudents(array) {

    let obj = {};

    for(let el of array){
        if(el.includes(': ')){
            let [course, capacity] = el.split(': ');
            if(obj.hasOwnProperty(course) == false){
                obj[course] = {
                    'capacity': Number(capacity),
                    'count': 0,
                    'users': {}
                }
                continue;
            }
            obj[course]['capacity'] += Number(capacity);
        }
        if(el.includes('with')){
            let tokens = el.split(/[\[|\]]/g);
            let user = tokens.shift();
            let credit = tokens.shift();
            tokens = tokens[0].split(' ');
            let course = tokens.pop();
            let email = tokens[tokens.length - 2];
            
            if(obj.hasOwnProperty(course) && obj[course]['capacity'] !== 0){
                if(obj[course]['capacity'])
                obj[course]['users'][Number(credit)] = {
                    'user': user,
                    'email': email};
                obj[course]['capacity']--;
                obj[course]['count']++;
            }
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => b[1].count - a[1].count);
    for(let [course, information] of sorted){
        console.log(`${course}: ${information.capacity} places left`);
        let sortedStudents = Object.entries(information['users'])
        .sort((a, b) => Number(b[0]) - Number(a[0]))
        .forEach(element => {
            console.log(`--- ${element[0]}: ${element[1]['user']}, ${element[1]['email']}`);
        });
        
    }
    


}
softUniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);
console.log("-----------");
softUniStudents([
  "JavaBasics: 15",
  "user1[26] with email user1@user.com joins JavaBasics",
  "user2[36] with email user11@user.com joins JavaBasics",
  "JavaBasics: 5",
  "C#Advanced: 5",
  "user1[26] with email user1@user.com joins C#Advanced",
  "user2[36] with email user11@user.com joins C#Advanced",
  "user3[6] with email user3@user.com joins C#Advanced",
  "C#Advanced: 1",
  "JSCore: 8",
  "user23[62] with email user23@user.com joins JSCore",
]);
