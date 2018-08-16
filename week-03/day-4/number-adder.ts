// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function adder(n: number) {
  if (n > 0) {
    return n += adder(n - 1);
  } else
    return 0
}

console.log(adder(5));