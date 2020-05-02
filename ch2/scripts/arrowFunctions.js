// Arrow functions
// ES6 you can use arrow functions instead of declaring a function with the "function" keyword
// You also don't have to use the "return" keyuword for most arrow function situations as well

// Original funciton declaration
function lordify(firstname) {
    return `${firstname} of Canterbury`;
} 
console.log(lordify('Dale'));
console.log(lordify('Jean'));

// Original function expressions
var lordifyExpression = function(firstname) {
    return `${firstname} of Centerbury`;
} 
console.log(lordifyExpression('DaleExpression'));
console.log(lordifyExpression('JeanExpression'));

// New ES6 arrow function with one parameter
// See how much shorter arrow functions are - we can fit the arrow function on one line, and we don't have to place paranthesis around the parameter since there is only one paramter
var lordifyArrow = firstname => `${firstname} of Canterbury`;
console.log(lordifyArrow('DaleArrowExpression'));

// Arrow function with more than one paramter but only one statement
var lordifyArrowMultipleParameters = (firstname, land) => `${firstname} of ${land}`;
console.log(lordifyArrowMultipleParameters('Brennan', 'Sacramento'));
console.log(lordifyArrowMultipleParameters('Christina', 'Chico'));

// Arrow function with more than one parameter and more than one statement need to have paranthesis and surrounded by brackets
var lordifyMultipleStatements = (firstName, land) => {
    if(!firstName) {
        throw new Error('A firstName is required to lordify')
    }
    if(!land) {
        throw new Error('A lord must have a land')
    }
    return `${firstName} of ${land}`
}
console.log(lordifyMultipleStatements('Brennan', 'Boston'));

// Using arrow functions to protect scope of "this" in an object interacting with the window
var tahoe = {
    resorts: ['Kirkwood', 'Squaw', 'Alpine', 'Heavenly', 'Northstar'],
    print: function(delay=1000) {
        setTimeout(() => {
            console.log(this.resorts.join(', '))
        }, delay)
    }
}
tahoe.print();

// Can't use the arrow function for the method function because it things "this" is the window and not apart of the object protperty
// We can test "this" is the window by testing it as a boolean by compaing "this" to "window" - tests true
var tahoeTest = {
    resorts: ['Kirkwood', 'Squaw', 'Alpine', 'Heavenly', 'Northstar'],
    print: (delay=1000)=> {
        setTimeout(() => {
            console.log(this === window)
        }, delay)
    }
}
tahoeTest.print();
// True

// In order to make sure "this" isn't part of the window we must use a regualr function on the method object
// To test this we compare "this" to window using a boolean inside the method, it tests false
var tahoeRegularFunction = {
    resorts: ['Kirkwood', 'Squaw', 'Alpine', 'Heavenly', 'Northstar'],
    print: function(delay=1000) {
        setTimeout(() => {
            console.log(this === window)
        }, delay)
    }
}
tahoeRegularFunction.print();
// False