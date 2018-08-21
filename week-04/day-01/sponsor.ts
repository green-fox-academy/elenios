'use strict'
import { Person } from './person'

export class Sponsor extends Person {
  protected company: string;
  protected hiredStudents: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
}

getGoal() {
  console.log('My goal is: Hire brilliant junior software developers.');
}
introduce() {
  super.introduce();
  console.log(`who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
}
hire () {
  this.hiredStudents++
}
}