let inferred = "windows"

inferred = 12345; // wont work
inferred = "12345" // will work because the type is inferred when initialized

/* Typescript will try to infer as many types as possible

EMBRACE INFERANCE!!!!*/

let variable = "B"
if (variable === "A") {
    let showInference = ""
    showInference = "I am a string";
} else {
    let showInference = 0
    showInference = 12345
}

// or: 


let showInferenceTwo: number | string;  
    showInferenceTwo = 1234; // both work because of union
    showInferenceTwo = "string";






