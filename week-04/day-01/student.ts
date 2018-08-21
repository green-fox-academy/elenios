'use strict'
import { Person } from './person'

export class Student extends Person {
  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'School of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
}

getGoal() {
  console.log('My goal is: Be a junior software developer.');
}
introduce() {
  super.introduce();
  console.log(`from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`);
}
skipDays(numberOfDays: number) {
  this.skippedDays += numberOfDays
}
}