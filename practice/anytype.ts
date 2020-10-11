let age: any;

age = 50;       // valid
age = "tanmay"; // valid
age = true;     // valid

let array: any[] = [];

// all valid
array.push('tanmay');
array.push(5);
array.push(true);


let ninja : {
    name: any,
    age: any
}

// both valid 

ninja = {name:'tanmay', age: 50};
ninja = {name: 50, age:'tanmay'};

