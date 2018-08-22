'use strict'

export abstract class Animal {
  name: string;
  age: number;
  gender: string;
  satiety: number;
  energy: number;
  happiness: number;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.satiety = 5;
    this.energy = 5;
    this.happiness = 0;
  }

  getName() {
    return this.name;
  }

  play(other: Animal) {
    if (other) {
      this.satiety -= 3;
      this.energy -= 3;
      this.happiness += 3;
    }
  } else

  eat() {
    this.satiety += 5;
    this.energy -= 1;
    this.happiness += 2;
  }

  sleep() {
    this.satiety -= 5;
    this.energy = 10;
    this.happiness -= 2;
  }

  abstract breedingMethod();
  abstract breed(other: Animal);

}