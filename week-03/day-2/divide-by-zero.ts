// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByZero(parameter: number): any {
  if (parameter === 0) {
    return 'fail';
  }
  else {
    return 10 / parameter;
  }
}

console.log(divideByZero(5));
console.log(divideByZero(0));