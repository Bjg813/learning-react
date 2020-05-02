// Object Literal Enhancement
// Opposite of desctructuring - restructuring

// 1. We can grab variables from the global scope and turn them into an object
var name = 'Tallac';
var elevation = 9738;

var funHike = {name, elevation};
console.log(funHike); // {name: 'Tallac', elevation: 9738}

// 2. We can also create object methods with object literal enhancement or restructuring
var name = 'Tallac';
var elevation = 9738;
var print = function() {
    console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
}
// restructure global variables to an object method
var hardHike = {name,elevation,print};
hardHike.print(); // Mt. Tallac is 9738 feet tall

// 3. When defining object methods, it is no longer necessary to use the function keyword
const skier = {
    name: 'Brennan',
    sound: 'Yes',
    powderYell() {
        let yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`)
    },
    speed(mph) {
        this.speed = mph;
        console.log('speed:' , mph)
    }
}
skier.powderYell(); // Yes Yes Yes!!!
skier.speed(100); // speed: 100