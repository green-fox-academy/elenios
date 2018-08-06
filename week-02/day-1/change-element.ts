// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];

let nyolc = numList.map(function(elem: number) {
    if (elem % 8 == 0) {
        return elem = elem / 2
    } 
    
    return elem
    
});

console.log(nyolc)
console.log(nyolc[3]);