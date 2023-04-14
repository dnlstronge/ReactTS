var inferred = "windows";
inferred = 12345; // wont work
inferred = "12345"; // will work because the type is inferred when initialized
/* Typescript will try to infer as many types as possible

EMBRACE INFERANCE!!!!*/
var variable = "B";
if (variable === "A") {
    var showInference = "";
    showInference = "I am a string";
}
else {
    var showInference = 0;
    showInference = 12345;
}
// or: 
var showInferenceTwo;
showInferenceTwo = 1234; // both work because of union
showInferenceTwo = "string";
