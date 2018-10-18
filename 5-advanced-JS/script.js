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



/* Primitives vs Objects

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


 * Both print out 30.
 * This is because when we set obj1 = to obj2 we did not actually create a new object.
 * All we did is create a new reference to obj1 NOT a copy.
 * Both reference the same place in memory.

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
*/


/* Passing Functions as Arguments
var years = [1990, 1965, 1937, 2005, 1998];


 * Created a generic function which loops over an input array.
 * Gave it a function as an input which is used to calculate some based on each element in the array.
 * We could also create multiple callback functions for fn.
 * Fn is a callback function because it will be called later in the process.

function arrayCalc(arr, fn) {
  var arrRes = [];

  for (var i = 0; i < arr.length; i++) {
      arrRes.push(fn(arr[i]));
  }
  return arrRes;
};

function calculateAge(element) {
    return 2018 - element;
}

function isFullAge(element) {
    return element >= 18;
}

function maxHeartRate(element) {
    if (element >= 18 && element <= 81){
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }
}


 * In this case calculateAge is the CALLBACK function.
 * If we were to call the function like this arrayCalc(years, calculateAge());.
 * It would not be a callback function.

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(years, isFullAge);
console.log(fullAges);

var rates = arrayCalc(years, maxHeartRate);
console.log(rates);
*/


/* Functions Returning Functions

 * This function will return an entire function that we can then use later.
 * This is possible because functions are always first class functions in JavaScript, because the are essentially objects.
 * We can write one generic function which is the interview question and then create a bunch of more specific functions based on the generic function.

function interviewQuestion (job) {
    if (job === 'designer') {
        // This is an anonymous function.
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');


 * Can call the function immediately.
 * This works because it is evaluated from left to right.

interviewQuestion('teacher')('Mark');
*/



/* IIFE
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

 This is an IIFE
 * The befit of writing the function like this is tha we cannot access the score variable outside of the function.
 * This creates data privacy.

(function () {
        var score = Math.random() * 10;
        console.log(score >= 5);
})();
// Will not print because score is not accessible.
// console.log(score);

// Pass in parameters in the last ().
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/



// Closures
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

/* Started by calling the retirement function and passed the value of 66.
 * That declares the a variable and returns the anonymous function inside of it.
 * Then the anonymous function finishes and it's execution context gets popped off the stack.
 */
var retirementUS = retirement(66);
// Here we call the retirement function.
retirementUS(1990);
retirement(66)(1990);
// The inner function is able to use the retirementAge variable and the a variable of the retirement function even tho it has already returned.












































