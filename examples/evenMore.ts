let myObject: {
    a: number,
    b: string,
    c: number, 
    d: boolean
}

myObject = {
    a: 1,
    b: "two",
    c: 3,
    d: false
} // this is ok and works

myObject = {
    a: "one",
    b: 2,
    c: "three",
    d: "false"
} // this isn't and wont be allowed