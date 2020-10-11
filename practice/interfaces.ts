interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void;
    spend(b: number): number;
}

// const me : IsPerson = {};    // invalid

const me : IsPerson = {
    name: 'tanmay',
    age: 20,
    speak(text:string) : void {
        console.log(text);
    },
    spend(amt: number) : number {
        return amt;
    },
    // skills: [];     // invalid as it is not a part of the interface
}


const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name);
};

// greetPerson({name:'tanmay'});   // invalid as person is of type IsPerson and even 
                                // if we won't be using the other parameters in the function,
                                // we have to pass everything

greetPerson(me);    // valid
