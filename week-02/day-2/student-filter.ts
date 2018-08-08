'use strict';

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function candillionaires(input: any) {
    let coolGuys = [];

    for (let i = 0; input.length > i; i++) {
        if (input[i].candies > 4) {
            coolGuys.push(input[i].name)
        }
    }

    return coolGuys;
}

console.log(candillionaires(students));

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function averageCandy(input: any) {
    let average = 0;

    for (let i = 0; input.length > i; i++) {
        average += input[i].candies
    }
    average = average / input.length

    return average;
}

console.log(averageCandy(students));