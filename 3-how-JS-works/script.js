///////////////////////////////////////
// Lecture: Hoisting

// Function declarations are hoisted.
calculateAge(1965);
function calculateAge(year) {
    console.log(2018 - year);
}

// Function expressions are not hoisted.
// retirment(1990);
var retirment = function(year) {
    console.log(65 - (2018 - year));
}



/* 
 * ----- Variables -----
 * In the creation phase of the variable object the code is scanned for variable declatraions
 * and the variable is set to undefined.
 */
console.log(age);
// This age varaible is stored in the variable object of the global execution context object. 
var age = 23; 

function foo() {
    // This is defined in the varaible object of the execution context object of the foo function.
    var age = 65;
    console.log(age);
}

foo();
console.log(age);


///////////////////////////////////////
// Lecture: Scoping

// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}


///////////////////////////////////////
// Lecture: The this keyword
/* 
 * This keyword in the Global Execution Context is the window object, 
 * because the window object is the default object.
*/
console.log(this);

/* 
 * In this case we have a regular function call, not a method 
 * and the this keyword in a regular function call always points to the window object. 
 * Object that this function is attached to is the gloabl object. 
 */

calculateAge(1994)

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1994,
    calculateAge: function() {
        // The this keyword refers to the john object and so prints the object.
        console.log(this);
        // Refersd to the john objects year of birth.
        console.log(2018 - this.yearOfBirth);

        // When we call john.calculateAge() the above console.log's will be printed along with the below "this".
        function innerFunction() {
            // Prints the window object because it is the default object becasue it is a regular function.
            console.log(this);
        }
        innerFunction();
    }
} 

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1997
};

/* 
 * Method Borrowing - Borrowing Johns method to use it on Mike, no parenthises becasue we treat the function like a variable
 * This variable is only assigned when the object calls the method.
 * When we calculate age on the Mike object then the this variable references the Mike object. 
 */
mike.calculateAge = john.calculateAge
mike.calculateAge();










