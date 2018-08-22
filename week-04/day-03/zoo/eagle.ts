'use strict'

import { Bird } from "./bird";
import { Egg } from "./egg";

export class Eagle extends Bird {

  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }

  breed(other: Bird) {
    if (this.gender !== other.gender && this.satiety > 3 && this.energy > 5 && this.happiness > 8) {
      this.satiety -= 3;
      this.energy -= 3;
      this.happiness = 0;
      return new Egg('eagleEgg');
    } else {
      console.log(`${this.name} is not in the mood of breeding.`);
    }
  }

  brood(egg: Egg) {
    egg = undefined;
    return new Eagle('Eagle Baby', 0, 'male')
  }
}