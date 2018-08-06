// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio (input: number) {

    let factorial: number = input;

    for (input; 1 < input; input--) {
        factorial = factorial * (input - 1);
    } 
    return factorial;
}

console.log(factorio(5));