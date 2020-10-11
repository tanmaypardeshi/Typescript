// explicit types

let character:string;
let age:number;
let isLoggedIn:boolean;

age = 30;   // valid

// age = 'tanmay'; // invalid


// arrays 

let objects : string[];

// objects.push('tanmay');  // error as objects is only declared but not initialised

let others : string[] = [];

others.push('tanmay');  // valid as others is initialised

// union types

let mixedtype: string|number;

mixedtype = 'tanmay';   // valid
mixedtype = 50;         // valid
// mixedtype= true;       // invalid

let array : (string|number)[] = [];

array.push(50);     // valid
array.push('tanmay');    // valid
// array.push(true);   // invalid

// objects

 let ninjaOne: object;

 ninjaOne = {name: 'tanmay', age:30};

//  ninjaOne = 'hello';    // invalid

let ninjaTwo: {
    name: string,
    age: number,
    belt: string
}

ninjaTwo = {
    name: 'tanmay',
    age: 20,
    belt: 'black'
}