import { Animal } from "./animal";
import { Eagle } from "./eagle";
import { Crocodile } from "./crocodile";
import { Giraffe } from "./giraffe";

'use strict'

class Zoo {
  name: string;
  animals: Animal[];

  constructor(name: string) {
    this.name = name;
    this.animals = [];

  }
  add(animal: Animal) {
    this.animals.push(animal);
  }

}

let zoo = new Zoo('Zooland');
let eagle1 = new Eagle('Eagle boy', 4, 'male');
let eagle2 = new Eagle('Eagle girl', 3, 'female');
zoo.add(eagle1);
zoo.add(eagle2);
let crocodile1 = new Crocodile('Croco boy', 2, 'male');
let crocodile2 = new Crocodile('Croco girl', 2, 'female');
zoo.add(crocodile1);
zoo.add(crocodile2);
let giraffe1 = new Giraffe('Giraffe boy', 3, 'male');
let giraffe2 = new Giraffe('Giraffe girl', 5, 'female');
zoo.add(giraffe1);
zoo.add(giraffe2);
/*
console.log("How do you breed?");
console.log("A " + crocodile1.getName() + " is breeding by " + crocodile1.breedingMethod());
console.log("A " + giraffe1.getName() + " is breeding by " + giraffe1.breedingMethod());
console.log("A " + eagle1.getName() + " is breeding by " + eagle1.breedingMethod());
*/
console.log(giraffe1);

let babygiraffe1: Giraffe = giraffe1.breed(giraffe2);

giraffe1.play();

babygiraffe1 = giraffe1.breed(giraffe2);

giraffe1.play(giraffe2);

let babygiraffe2: Giraffe = giraffe1.breed(giraffe2);

console.log(babygiraffe2);

