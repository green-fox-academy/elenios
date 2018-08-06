// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"];

// abc[0] = abc.splice(2, 1, abc[0])[0];

let first = abc [0];
let third = abc [2];

abc.splice(0,1,third)
abc.splice(2,1,first)

//abc.reverse();

console.log(abc);