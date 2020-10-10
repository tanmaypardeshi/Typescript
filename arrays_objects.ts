// Arrays

let names = ['tanmay', 'mario', 'sid'];

names.push('aditya');   // valid

// names.push(5);  // invalid type

let numbers = [10,20,30,40];

numbers.push(25);   // valid

// numbers.push('rest');   // invalid type

let mixed = ['tanmay', 5, 4];

mixed.push('aditya');   // valid

mixed.push(5);  // valid

mixed[2] = 'rahul';  // valid

// Objects

let object = {
    name: 'mario',
    age: 50,
    belt: 'yellow'
};

// object.name = 5;    // invalid

object.name = 'tanmay';     // valid

object = {
    // name: 50,   // invalid
    name: 'aditya',
    age: 40,
    belt: 'green'
}
