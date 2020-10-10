let hello = () => {
    console.log('hello world');
}

// hello = 25;     // invalid

let greet: Function;

// greet = 'hello';    // invalid

greet = () => {
    console.log('hello, again');
}

const add = (a: number, b :number, c:number|string) => {
    console.log(a+b);
    console.log(c);
}

// add(5,10);  // invalid

add(5,10,15);   // valid

add(5,10, "tanmay");    // valid

const sub = (a:number, b:number, c?: number|string) => { // ? makes the argument optional
    console.log(a+b);
    console.log(c);
}

// all valid

sub(5,10);

sub(5,10, 15);

sub(5, 10 , 'tanmay');

// void specifies the return type of function. If we return nothing, default is void.
// In javascript, it gets changed to undefined.

let mul = (a:number, b:number, c: number|string = 5): void => { // default value for c is 5 and it can be overriden 
                                                          // during call by number or string type
    console.log(a*b);
    console.log(c);
}

// all valid

mul(5,10);  // c = 5

mul(5,10,15);   // c = 15

mul(5,10,'tanmay');  // c = 'tanmay'


let div = (a: number, b:number, c: number|string = 5): number => {
    return a + b;
}

// valid 

div(5, 10);

div(5, 10, 15);

div(5, 10, 'tanmay');