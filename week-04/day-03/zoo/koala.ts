'use strict'

import { Mammal } from "./mammal";

export class Koala extends Mammal {

  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }

  breed(other: Koala) {
    if (this.gender !== other.gender && this.satiety > 3 && this.energy > 5 && this.happiness > 8) {
      this.satiety -= 3;
      this.energy -= 3;
      this.happiness = 0;
      return new Koala('Baby Koala', 0, 'male');
    } else {
      console.log(`${this.name} is not in the mood of breeding.`);
    }
  }
}