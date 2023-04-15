type Person = {
    name: string // inferred? 
    numbers: number[],
    foods: string[]
    pet: {
        name: string
        type: string
        age: number
    },
    collection: string[] // array of strings or nums



}

const Jamima: Person = {
    name: "Jamima",
    numbers: [7, 45, 23, 53, 1, 5],
    foods: ["pasta", "bread", "cheese"],
    pet: {
        name: "Rumples",
        type: 'Dog',
        age: 9
            },
    collection: ["Bloop", "Flip", "Blip"]

}

const Shawn: Person = {
    name: "Shawn",
    numbers: [ 1, 2, 3, 4],
    foods: ["pizza", "steak", "grapes"],
    pet: {
        name: "Mikke",
        type: "Snuffle-Pig",
        age: 9

    },
    collection: ["Nip", "Nap", "Werp"]
}

