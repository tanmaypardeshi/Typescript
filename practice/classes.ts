class Example {
    name: string;
    age: number;
    belt: string;

    constructor(a:string, b:number, c:string) {
        this.name = a;
        this.age = b;
        this.belt = c;
    }

    format() {
        return `${this.name} is ${this.age} years old and has a ${this.belt} belt.`
    }
}

const obj1 = new Example('tanmay', 20, 'green');
const obj2 = new Example('aditya', 20, 'black');

let objects: Example[] = [];    // array of type Example only

// objects.push('hello');  // invalid
// objects.push(20);   // invalid

objects.push(obj1); // valid
objects.push(obj2); // valid

// If we haven't used access specifier then we can change the attributes
// of the object like how its shown below

obj1.name = 'rahul';
obj1.age = 21;
obj1.belt = 'yellow';

objects.forEach(obj => {
    console.log(obj.name, obj.age, obj.belt, obj.format());
});

// 3 access specifiers - public, private and read only

class Invoice {
    readonly client: string;
    private details : string;
    public amount: number;

    constructor(a:string, b:string, c:number) {
        this.client = a;
        this.details = b;
        this.amount = c
    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}.`;
    }
}

const inv1 = new Invoice('tanmay', 'works on a website', 250);
const inv2 = new Invoice('aditya', 'works on systems', 300);

let invoices : Invoice[] = [];

invoices.push(inv1);
invoices.push(inv2);

invoices.forEach(inv => {
    // inv.client = 'tanmay';  // error, readonly attribute
    // console.log(inv.details);  // error, private type

    console.log(inv.amount, inv.client, inv.format());
});


// Shorter way of writing classes ONLY IF WE ARE USInG ACCESS MODIFIERS

class Inv {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}.`;
    }
}