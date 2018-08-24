'use strict'

export class Person {
  protected name: string;
  protected defeated: boolean;

  constructor(name: string) {
    this.name = name;
    this.defeated = false;
  }
  introduce() {
    console.log(`Hi, I\'m ${this.name}.`);
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }

  fight(other: Person) {
    if (this.defeated == false) {
      if (other.defeated == false) {
        let fate: number = Math.ceil(Math.random() * 2);
        if (fate == 1) {
          console.log(`${this.name} has defeated ${other.name}. The WINNER is ${this.name.toUpperCase()}\r\n`);
          other.defeated = true;
        } else if (fate == 2) {
          console.log(`${other.name} has defeated ${this.name}. The WINNER is ${other.name.toUpperCase()}\r\n`);
          this.defeated = true;
        }
      }
    }
  }
  finalFight(other: Person, other2: Person) {
    let fate: number = Math.ceil(Math.random() * 3);
    if (fate == 1) {
      console.log(`${this.name} has defeated ${other.name} & ${other2.name}. The WINNER is ${this.name.toUpperCase()}\r\n`);
      other.defeated = true;
      other2.defeated = true;
    } else if (fate == 2) {
      console.log(`${other.name} has defeated ${this.name} & ${other2.name}. The WINNER is ${other.name.toUpperCase()}\r\n`);
      this.defeated = true;
      other2.defeated = true;
    } else if (fate == 3) {
      console.log(`${other2.name} has defeated ${this.name} & ${other.name}. The WINNER is ${other2.name.toUpperCase()}\r\n`);
      this.defeated = true;
      other.defeated = true
    }
  }
}


