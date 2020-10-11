let character = 'hello';   // string, cannot become number or object or any other type
let age = 50;   // number type
let isBool = true; // boolean type


// let character = 5;   // error
// age = 'tanmay';      // error
// isBool = 50;         // error


const circ = (diameter) => {
    return diameter * Math.PI;
}

console.log(circ('hello'));     // valid as diameter type is not specified

const area = (radius: number) => {
    return radius * Math.pow((Math.PI) ,2);
} 

// console.log(area('hello'));     // error, as radius has to be number type

console.log(area(5));  // valid

