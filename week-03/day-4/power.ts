// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(base: number, exponent: number) {
  if (exponent > 0) {
    return base * power (base, exponent - 1)
  } else {
    return 1
  }
}
console.log(power(3,3));