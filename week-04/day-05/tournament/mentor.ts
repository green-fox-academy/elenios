'use strict'
import { Person } from './person'

export class Mentor extends Person {

  constructor(name: string) {
    super(name);
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }
  introduce() {
    super.introduce();
  }
}