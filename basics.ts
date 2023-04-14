// primitives: strings, numbers, booleans,
// more complex: arrays, objects
// function types, parameters and more+


// primitives: 

let age: number;

age = 45 // will work
age = "FortyFive" // will not

let userName: string;

userName = "42142" // will work
userName = 42142 // wont work

let answer: boolean;

answer = true; // will work
answer = "true"; // wont work

/* Try with an object */

let object: {
    value1: number,
    value2: string,
    funct: Function
}
const myFunction = () => {
    console.log("something")
}
const myArray = [1, 2, 3]
const newArray: string[] = ["one", "two", "three"] // works
const nutherArray: string[] = [1 ,2 ,3] // wont work

object = {
    value1: 55, // works
    value2: "fiftyfive", // works
    funct: myFunction // works
}

object = {
    value1: "fiftyfive", // wont work
    value2: 55 // wont work
    funct: myArray // wont work
}


