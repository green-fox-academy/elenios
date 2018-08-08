'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students


function candyCount(input: any[]) {
    let candies = []
    let sumOfCandies = 0;
    for (let i = 0; i < input.length; i++) {
        candies.push(input[i].candies)
        sumOfCandies += input[i].candies
    }

    return sumOfCandies
}
console.log(candyCount(students));

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function ageCount(input: any[]) {
    let sumOfAge = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].candies < 5) {
            sumOfAge += input[i].age;
        }
    }
    return sumOfAge
}
console.log(ageCount(students));