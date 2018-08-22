import { Animal } from "./animal";
import { Eagle } from "./eagle";
import { Crocodile } from "./crocodile";
import { Koala } from "./koala";

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
let koala1 = new Koala('Koala boy', 3, 'male');
let koala2 = new Koala('Koala girl', 5, 'female');
zoo.add(koala1);
zoo.add(koala2);

console.log("How do you breed?");
console.log("A " + crocodile1.getName() + " is breeding by " + crocodile1.breedingMethod());
console.log("A " + koala1.getName() + " is breeding by " + koala1.breedingMethod());
console.log("A " + eagle1.getName() + " is breeding by " + eagle1.breedingMethod());