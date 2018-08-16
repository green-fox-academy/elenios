// Write a recursive function that takes one parameter: n and counts down from n.

function counter(n: number) {
  if (n == 0) {
    console.log(n);
  } else {
    console.log(n);
    counter(n - 1);
    }
}
counter(10);


function counter(n: number) {
  console.log(n);
  if (n > 0) {
    counter (n - 1);
  } else if (n < 0) {
    throw new Error('minusz szam nem adja');
  }
}
counter(10);