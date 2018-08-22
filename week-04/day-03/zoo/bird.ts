'use strict'
import { Animal } from "./animal";
import { Egg } from "./egg";
import { Flyable } from "../interfaces/flyable";

export abstract class Bird extends Animal implements Flyable {

  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }

  breedingMethod() {
    return 'laying eggs.'
  }

  
  fly() {
    console.log(`${this.name} soars majestically in the air.`);
  }
  
  land() {
    console.log(`${this.name} carefully lands.`);
  }
  
  takeOff() {
    if (this.energy > 3) {
      console.log(`${this.name} takes off to fly.`);
    } else {
      console.log(`${this.name} is too tired to fly.`);
    }
  }

  tweet() {
    console.log(`${this.name} starts tweeting. "Chirp-chirp-chirp"`);
  }

  abstract breed(other: Bird);
  abstract brood(egg: Egg)

}