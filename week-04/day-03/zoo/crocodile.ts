'use strict'

import { Egg } from "./egg";
import { Reptile } from "./reptile";

export class Crocodile extends Reptile {

  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }

  breed(other: Crocodile) {
    if (this.gender !== other.gender && this.satiety > 3 && this.energy > 5 && this.happiness > 8) {
      this.satiety -= 3;
      this.energy -= 3;
      this.happiness = 0;
      return new Egg('crocodileEgg');
    } else {
      console.log(`${this.name} is not in the mood of breeding.`);
    }
  }

  brood(egg: Egg) {
    egg = undefined;
    return new Crocodile('Croco Baby', 0, 'male')
  }
}