'use strict'

import { Mammal } from "./mammal";

export class Giraffe extends Mammal {

  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }

  breed(other: Giraffe) {
    if (this.gender !== other.gender && this.satiety >= 3 && this.energy >= 3 && this.happiness >= 8) {
      this.satiety -= 3;
      this.energy -= 3;
      this.happiness = 0;
      console.log(`\r\nOh yeah! Let's breed!\r\n`);
      return new Giraffe('Baby Giraffe', 0, 'male');
    } else {
      console.log(`\r\n${this.name} is not in the mood of breeding.\r\n`);
    }
  }
}