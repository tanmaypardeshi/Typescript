const anchor = document.querySelector('a');

// console.log(anchor.href);   // this gives an error because its unsure if a is null or not

// Workaround 1 - Check if anchor is not null at runtime

if(anchor) {    // valid
    console.log(anchor.href);
}


// Workaround 2 - Put an exclamation mark at the end of the initialisation. 
// This ensures the compiler that the developer knows that the
// variable is not going to be a null value

const a = document.querySelector('a')!;

console.log(a.href);    // valid


// When we select an element by tag name, then we get auto completion features
// autmatically. But if we use class name or id name, ts cannot recognise the type
// the type by itself thus not providing auto completion features
// The workaround for this is to use the as keyword as shown in the example below.


// This is called as typecasting. We do not need to write ! if we are typecasting elements

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);
