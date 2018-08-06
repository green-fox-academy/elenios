// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum (...input: number[]) {
    let sum: number = 0;
    
    for (let i: number = 0; i < input.length; i++) {
     //   sum += input[i]
     console.log(input[i]);
    } 
    return sum;
}
sum(1,2,3,4,5);