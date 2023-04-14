/* First define own base-type */

type Person = {
    name: string,
    number: number
}
type Pet = {
    name: string,
    favouriteToy: string
}

let dave: Person = { 
    name: "dave",
    number: 45,
}
let steve: Person = {
    name: "steve",
    number: 66
}
let buttonsTheCat: Pet = {
    name: "Buttons the Cat",
    favouriteToy: "Rubber mouse"
}

// demo alias in action