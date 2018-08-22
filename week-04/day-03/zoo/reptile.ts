'use strict'
import { Animal } from "./animal";
import { Egg } from "./egg";

export abstract class Reptile extends Animal {

  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }

  breedingMethod() {
    return 'laying eggs.'
  }

  swim() {
    if (this.energy > 2) {
      console.log(`${this.name} dives in the water.`);
    } else {
      console.log(`${this.name} is too tired to swim.`);
    }
  }
  
  bask() {
    console.log(`${this.name} lays down enjoying sunlight.`);
  }
  
  abstract breed(other: Reptile);
  abstract brood(egg: Egg)

}