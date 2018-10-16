// This is the function constructor.
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


