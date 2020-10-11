const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40}); // valid
let docTwo = addUID('hello');   // valid as T can take anything

// if we want the function to only take object types then 

const addUID1 = <T extends object>(obj:T) => {
    let uid = Math.floor(Math.random()* 100);
    return {...obj, uid};
}

let docThree = addUID1({name: 'yoshi', age:50});    // valid
let docFour = addUID1('hello'); // invalid as addUID1() will only take object types


// if we want to get more specific as to what parameter the object type should have

const addUID2 = <T extends {name:string}>(obj:T) => {
    let uid = Math.floor(Math.random()* 100);
    return {...obj, uid};
}

let docFive = addUID2({name: 'yoshi', age:50});    // valid
// let docSix = addUID2({fname: 'tanmay', age:29});   // invalid as addUID2() will only take object types
                                                    // which have the parameter name in it
// let docSeven = addUID2({name: 50, age: 50});    // invalid as addUID2 will accept object which has a type of 
                                                // name and it has to be a string

console.log(docOne.age);


// with interfaces

interface Resource <T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docEight: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data : 'tanmay'
}

const docNine : Resource<object> = {
    uid: 2,
    resourceName: 'person',
    // data: 'tanmay' // invalid
    data: {name:'tanmay'}   // valid
}