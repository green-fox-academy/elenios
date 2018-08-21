'use strict'
import { Person } from './person'

export class Mentor extends Person {
  protected level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'Intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }
  introduce() {
    super.introduce();
    console.log(` ${this.level} mentor.`);
  }
}