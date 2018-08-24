'use strict'
import { Person } from './person'

export class Student extends Person {
  protected previousOrganization: string;

  constructor(name: string) {
    super(name);
  }

  getGoal() {
    console.log('My goal is: To be the best software developer ever born.');
  }
}