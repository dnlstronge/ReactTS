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
