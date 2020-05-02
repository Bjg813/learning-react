// Spread operator
// Spread operator lets us combine contents of arrays

// Combine two arrays into a third array
var peaks = ['Tallac', 'Ralston', 'Rose'];
var canyons = ['Ward', 'Blackwood'];
var tahoe = [...peaks, ...canyons];
console.log(tahoe.join(', ')); // Tallac, Ralston, Rose, Ward, Blackwood

// Grab the last element in the array by using the reverse method and destructuring
// Since we don't want to mutate the array in React we can use the spread operator to make a copy of the array before we reverse it
// To make a copy of the array use the spread operator
var [last] = [...peaks].reverse();
console.log(last); // Rose
console.log(peaks.join(', ')); // Tallac, Ralston, Rose - The original array has not been mutated 

// The spread operator can be used to get some or the rest of the items in the array
var lakes = ['Donner', 'Marlette', 'Fallen Leaf', 'Cascade'];
var [first, ...rest] = lakes;
console.log(rest.join(', ')); // 'Marlette, Fallen Leaf, Cascade'

// We can also use the spread operator to to collect function arguments as an array
function directions(...args) {
    var [start, ...remaining] = args
    var [finish, ...stops] = remaining.reverse();

    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
}

directions(
    'Truckee',
    'Tahoe City',
    'Sunnyside',
    'Homewood',
    'Tahoma'
)

// We can also use the spread operator for objects
var morning = {
    breakfast: 'oatmeal',
    lunch: 'peanut butter and jelly'
}
var dinner = 'mac and cheese';

var backpakingMeals = {
    ...morning,
    dinner
}
console.log(backpakingMeals);

