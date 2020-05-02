// Destructuring assignment allows you to locally scope fields within an object and to declare which values will be used
// Let's scope two keys out of an object to be able to use them locally
// Sandwich object
var sandwich = {
    bread: 'dutch crunch',
    meat: 'tuna',
    cheese: 'swiss',
    toppings: ['lettuce', 'tomato', 'mustard']
}
// lets destructure the sandwich object to only take out the bread and meat keys, since that is all we need for right now
// In order to deconstruct an object we need to first list the keys we want to take out by enclosing them in curly brackets - then assign it to the object name
// Code pulls bread and meat out of the object and creates local variables for them
var {bread, meat} = sandwich;

bread = 'garlic'
meat = 'turkey'
console.log(bread); // garlic
console.log(meat); // turkey

console.log(sandwich.bread, sandwich.meat) // dutch crunch tuna
// destructuring an object does not mutate the object which means it won't change the object properties which is great for React

// We can also deconstruct objects instead of using dot notation
// Deconstructing an object inside of a function
var regularPerson = {
    firstname: 'Bill',
    lastname: 'Wilson'
}

var lordify = ({firstname}) => {
    console.log(`${firstname} of Canterbury`)
}

lordify(regularPerson); // Bill of Canterbury

// Destructing an element out of an array
var [firstResort] = ['Kirkwood', 'Squaw', 'Alpine'];
console.log(firstResort) // Kirkwood

// We can pass over unnecessary vaules with list matching using commas to pass over elemtns we don't want to access
var [,,thirdResort] = ['Kirkwood', 'Squaw', 'Alpine'];
console.log(thirdResort); // Alpine