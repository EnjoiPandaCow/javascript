
// Lecture - Variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);


////////////////////////
// Lecture - Variables 2
var name = 'John';
var age = 26;

// Type Conversion -  JS automatically converts the number to a string.
console.log(name + age);
console.log(age + age);

// Declare a variable and not define it's value immediately.
var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

// Converts everything to a string.
console.log(name + ' ' + age + ' ' + job + ' ' + isMarried);

// Variable Mutation - Changing the value of a variable.
age = 'thirty six';
job = 'driver';

console.log(name + ' ' + age + ' ' + job + ' ' + isMarried);

// Prompting the browser for lastName.
var lastName = prompt('What is the last name?');
console.log(lastName);

// Alert the browser.
alert(name + ' ' + age + ' ' + job + ' ' + isMarried);


//////////////////////
// Lecture - Operators
var currentYear = 2018;
var birthYear =  currentYear - 26;

// Mutating birthyear
birthYear = currentYear - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

// ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = 26
ageJohn = ageMark = (3 + 5) * 4 - 6;

// Adds one to ageJohn
ageJohn ++;
// Multiplies the variable by 2
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);


/////////////////////////////
// Lecture if/else statements
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married.');
} else {
    console.log(name + ' is not married.')
}

isMarried = false;

// Do not need the comparision.
if(isMarried) {
    console.log('Yes');
} else {
    console.log('No');
}

// Prints because by using the == it keeps them the same.
if (23 == '23') {
    console.log('Someting to print...');
}


//////////////////////////////////
// Lecture: Boolean Logic & Switch

var age = 25;

if (age < 20) {
    console.log('John is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}

var job = 'teacher';

job = prompt('What does john do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab.');
        break;
    case 'cop':
        console.log('John is batman.');
        break;
    default:
        console.log('John does somethng else.');
}


//////////////////////
// Coading Challange 1
var p1Height = prompt ('How tall is Player 1');
var p1Age = prompt ('How old is Player 1');

var p2Height = prompt ('How tall is Player 2');
var p2Age = prompt ('How old is Player 2');

var p3Height = prompt ('How tall is Player 3');
var p3Age = prompt ('How old is Player 3');

var p1Score = (p1Height * 1) + (p1Age * 5);
var p2Score = (p2Height * 1) + (p2Age * 5);
var p3Score = (p3Height * 1) + (p3Age * 5);

if (p1Score > p2Score && p1Score > p3Score) {
    console.log('Player 1 wins with a score of: ' + p1Score);
} else if (p2Score > p1Score && p2Score > p3Score) {
    console.log('Player 2 wins with a score of: ' + p2Score);
} else if (p3Score > p1Score && p3Score > p2Score) {
    console.log('Player 3 wins with a score of: ' + p3Score);
} else {
    console.log('It was a draw');
}


/////////////////////
// Lecture: Functions

function calAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = calAge(1990);
var ageMike = calAge(1969);
var ageMary = calAge(1948);

console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);


function yearsUntilRetirment(name, yearOfBirth) {
    var age = calAge(yearOfBirth);
    var retirment = 65 - age;

    if (retirment >= 0) {
        console.log(retirment);
    } else {
        console.log('You already retired duh!');
    }
}

yearsUntilRetirment('John', 1990);
yearsUntilRetirment('Mike', 1969);
yearsUntilRetirment('Mary', 1948);


////////////////////////////////////
// Lecture: Statements & Expressions

// Function Statement
function someFunc(someParam) {
    someCode
}

// Statment - Performs an action does not produce and imediate value.
if (x === 5) {
    do someting
}

// Function Expression
var someFun = function(someParam) {
    someCode
}

// Expresions - Produce and output / outcome.
3 + 4;
var x = 3;



////////////////////////////////////
// Lecture: Arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'Teacher', false];

// Adds an element to the end of the array.
john.push('Blue');
// Adds an element to the start of the array.
john.unshift('Mr.');
// Removes the value from the end of the array.
john.pop();
// Remove the value from the start of the array.
john.shift();
// Returns the index vlaue of the element.
alert(john.indexOf('Smith'));

console.log(john);

if (john.indexOf('Teacher') === -1) {
    console.log('John is not a teacher');
} else {
    console.log('John is a teacher');
}


////////////////////////////////////
// Lecture: Objects

var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'Teacher',
  isMarried: false
};

// Dot Notation
console.log(john.lastName);
// Square Brackets.
console.log(john['lastName']);

// Gives us back John's job.
var xyz = 'job';
console.log(john[xyz]);

// Mutating or changing John's last name and job.
john.lastName = 'Miller';
john['job'] = 'Programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'Retired';
jane['isMarried'] = true;


////////////////////////////////////
// Lecture: Objects & Methods

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    // Using a function expression, different from a function statement. Instead of using = we use :
    calculateAge: function(yearOfBirth) {
        return 2018 - yearOfBirth;
    }
};

// Retrieving family array.
console.log(john.family);
// Retrieving Bob from the array.
console.log(john.family[2]);
// Calling the function in the object.
console.log(john.calculateAge(1990));

var jane = {
    name: 'Jane',
    lastName: 'Smith',
    yearOfBirth: 1988,
    job: 'Teacher',
    isMarried: false,
    family: ['John', 'Mark', 'Bob'],
    // Using a function expression, different from a function statement. Instead of using = we use :
    calculateAge2: function() {
        return 2018 - this.yearOfBirth;
    }
};

// Calling the method on a variable inside of the Jane object.
console.log(jane.calculateAge2());

// Calculating Jane's age and putting it back into the Jane object.
var age = jane.calculateAge2();
jane.age = age;
console.log(jane);


// Want to automatically store the calculation of Joan's age into the Joan object.
var joan = {
    name: 'Joan',
    lastName: 'Smith',
    yearOfBirth: 1987,
    job: 'Teacher',
    isMarried: false,
    family: ['John', 'Mark', 'Bob'],
    // Using a function expression, different from a function statement. Instead of using = we use :
    calculateAge3: function() {
        this.age = 2016 - this.yearOfBirth
    }
};

// Automatically calculates the age and then stores it in the age property of the object.
joan.calculateAge3();
console.log(joan);


////////////////////////////////////
// Lecture: Loops & Iteration

// For loop to count from 0 - 9
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// Printing all of the names in the array.
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
for (var x = 0; x < 5; x++) {
    console.log(names[x]);
}

// Printing all of the names in the array when we don't know the length of the array.
var names2 = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
for (var y = 0; y < names2.length; y++) {
    console.log(names2[y]);
}

// Printing all of the names in the array backwards
var names3 = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
for (var t = names3.length - 1; t >= 0; t--) {
    console.log(names3[t]);
}

// While loop
var names4 = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

var i = 0;

while(i < names.length) {
    console.log(names[i]);
    i++;
}

// For loop printing 1 - 5
for (var i = 1; i < 6; i++) {
    console.log(i);
    // If function uses brake to stop the count at 3
    if (i === 3) {
        break;
    }
}

// For loop printing 1 - 5
for (var i = 1; i < 6; i++) {
    // If function skips number 3 using continue
    if (i === 3) {
        continue;
    }
    console.log(i);
}
*/

////////////////////////////////////
// Coding Challenge 2

years = [1974, 1994, 1996, 1997, 1984, 1980, 2008, 2012, 2015];

emptyArray = [];

for (var i = 0; i < years.length; i++) {
    var currentYear = 2018;
    emptyArray[i] = currentYear - years[i];
}

console.log(emptyArray);


for (var x = 0; x < emptyArray.length; x++) {
    if (emptyArray[x] > 17) {
        console.log('Full Age');
    } else {
        console.log('Under Age')
    }
}























