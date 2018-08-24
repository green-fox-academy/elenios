'use strict'
import { Person } from './person'

export class Psychologist extends Person {
  protected company: string;
  protected curedStudents: number;

  constructor(name: string) {
    super(name);
    this.curedStudents = 0;
}

getGoal() {
  console.log('My goal is: Analyze junior software developers.');
}
introduce() {
  console.log(`Hi, I\'m ${this.name}.`);
}
therapy () {
  this.curedStudents++
}
}