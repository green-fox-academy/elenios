'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function securityCheck(people) {
let festivalgoers = [];

  for (let i = 0; i < people.length; i++) {

    if (people[i].guns == 0) {
      festivalgoers.push(people[i].name);
    }
    if (people[i].guns > 0) {
      watchlist.push(people[i].name);
    }
    if (people[i].alcohol > 0) {
      securityAlcoholLoot += people[i].alcohol;
      people[i].alcohol = 0;
    }
  }

  return 'Watchlist: ' + watchlist + '\n' + 'Looted alcohol: ' + securityAlcoholLoot + '\n' + 'People allowed to enter: ' + festivalgoers;

}
console.log(securityCheck(queue));




export = securityCheck;