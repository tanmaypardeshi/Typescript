let greet : (a:number, b:string) => void;

greet = (para1: number, para2: string) => {
    console.log(para1, para2);
}

// invalid

// greet = (para1: string, para: number): string => {
//     return para1;
// }

let calc : (a:number, b:number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action == 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

let details : (obj: {name: string, age: number}) => void;

type signature = {name:string, age:number};     // alias

details = (details : signature) => {
    console.log(details);
}
