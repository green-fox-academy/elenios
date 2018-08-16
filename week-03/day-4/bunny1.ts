// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function ears(bunnies: number) {
  if (bunnies > 0) {
    return 2 + ears(bunnies - 1)
  } else {
    return 0
  }
}
console.log(ears(20));