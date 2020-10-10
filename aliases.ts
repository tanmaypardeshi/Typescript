type stringOrNum = string|number;

type objWithName = {name:string, age:number};

const details = (uid: stringOrNum) => {
    console.log(uid);
}

const person = (object: objWithName) => {
    console.log(object.name, object.name);
}