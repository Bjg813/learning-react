// Classes
// Classes are new to ES6 and they are replacing constructors and prototypes but function in the same way and keep inheritance the same way

// This is the old way using constructors
function Vacation(destination, length) {
    this.destination = destination;
    this.length = length;
}

Vacation.prototype.print = function() {
    console.log(this.destination + ' | ' + this.length + ' days');
}

var maui = new Vacation('Maui', 7);
maui.print(); // Maui | 7 days

// This is the new way - now instead of using Constructors and Prototypes, which is a lot of typing and doesn't make sense to people coming from different languages, we use classes
// Class declaration
class ClassVacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log(`${this.destination} will take ${this.length} days`);
    }
}

const trip = new ClassVacation('Santiago, Chile', 7)
trip.print(); // Santiago, Chile will take 7 days


// We can reuse classes to create new vacations or we can even 'extend' the class the create whole new subclasses
// We must acknowledge the superclass in order to extend out to subclasses
// The subclass inherits the properties of the superclass
class Expedition extends ClassVacation {
    constructor(destination, length, gear) {
        super(destination, length);
        this.gear = gear;
    }

    print() {
        super.print();
        console.log(`Bring your ${this.gear.join(' and your ')}`);
    }
}

const tripExpedition = new Expedition('Mt. Whitney', 3, ['sunglasses', 'prayer flags', 'camera']);
tripExpedition.print(); // Mt. Whitney will take 3 days
                        // Bring your sunglasses and y our prayer flags and your camera