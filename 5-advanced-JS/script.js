/* This is the function constructor.
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

// Adding the calculate age method to the person instances prototypes.
Person.prototype.calculateAge = function() {
        console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

// Using the function constructor to create the john object. This is called instantiation.
var john = new Person('John', 1990, 'Teacher');
john.calculateAge();
console.log(john.lastName);

var jane = new Person('Jane', 1969, 'Designer');
jane.calculateAge();
console.log(jane.lastName);

var mark = new Person('Mark', 1948, 'Retired');
mark.calculateAge();
console.log(mark.lastName);
*/


/* Object.create
var personProto = {
    calculateAge: function() {
        console.log(2016 - yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job ='teacher';

// Object.create will take in a second parameter.
var jane = Object.create(personProto, {
    name : {value: 'Jane'},
    yearOfBirth: {value:1969},
    job: {value: 'designer'}
});
*/


// Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;

// Each of the variables actually hold their own copy of the data they do not reference anything.
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj2.age = 30;

/*
 * Both print out 30.
 * This is because when we set obj1 = to obj2 we did not actually create a new object.
 * All we did is create a new reference to obj1 NOT a copy.
 * Both reference the same place in memory.
 */
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Waterford'
};

function change(a, b) {
    a = 30;
    b.city = 'Cork';
}

// We passed an age variable holding a primitive and and object variable holding an object to our function.
change(age, obj);

// Age did not change.
console.log(age);
// The city did change.
console.log(obj.city);








