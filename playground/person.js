//constructor is a function initialises an object
//new keyword creates object using constructor function
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}

//const me = new Person('Clancey', 'Will', 26);
//console.log(me);
//prototype is mechanism in which javascript objects inherit features from one another
//
 
//const me = new Person('Clancey', 'Will', 27);
//console.log(me.getBio());
// create prototype called data 
//output should be (my name is John Smith)



//create a prototype setName ('Jenna', 'Aurora') 


//const me = new Person('Jenna', 'Aurora');
//console.log(me.setName
Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Clancey', 'Will', 27);
me.setName('Jenna Aurora');
console.log(me.setName());


