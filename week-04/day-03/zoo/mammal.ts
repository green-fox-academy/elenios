'use strict'
import { Animal } from "./animal";

export abstract class Mammal extends Animal {

  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }

breedingMethod() {
  return 'pushing miniature versions out.'
}

  jump() {
    if (this.energy > 2) {
      console.log(`${this.name} jumps high in the air.`);
    } else {
      console.log(`${this.name} is too tired to jump.`);
    }
  }

  climb(object: string) {
    console.log(`${this.name} climbs on top of a ${object}.`);
  }

  abstract breed(other: Mammal);
}