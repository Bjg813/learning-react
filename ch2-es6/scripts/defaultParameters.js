// Default parameters
// Can setup default parameters in case a parameter is not set by the user
function logActivity(name='Brennan Grout', activity='Fly Fishing') {
    console.log( `${name} loves ${activity}`);
}
logActivity();

// Default parameters can be any types, not just strings, including objects
var defaultPerson = {
    name: {
        first: 'Brennan',
        last: 'Grout'
    },
    favActivity: 'Fly Fishing'
}

function logActivities(p=defaultPerson) {
    console.log(`${p.name.first} loves ${p.favActivity}`);
}
logActivities();