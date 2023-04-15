/* function & types */

function add(a: number, b: number) {
  let answer = a + b;
  console.log(answer);
  return answer; // this is returned type (hover over add to see this) - inferred return type (number)
}

// same as:

function addAgain(a: number, b: number): number {
  let answer = a + b;
  console.log(answer);
  return answer;
}

/*Functions generally have an input and an output, hence they have a return type */

/*Demo void - comparable to null & undefined
funtion never returns */

function printSomething(a: any) {
  console.log(a);
}

/* GENERICS */

function insertAt(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAt(demoArray, -1); // doesn't pick up that it's an array of numbers