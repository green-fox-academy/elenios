import { Thing } from "./things";
import { Printable } from "../../week-04/day-03/interfaces/printable";

class Fleet implements Printable {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  printAllFields() {
    console.log(this.things);        
  }

  add(thing: Thing) {
    this.things.push(thing);
  }

  print() {
    for (var i = 0; i < this.things.length; i++) {
      if (this.things[i].completed == true) {
        console.log(i + 1 + '. ' + '[x] ' + this.things[i].name);
    } else {
      console.log(i + 1 + '. ' + '[ ] ' + this.things[i].name);
    }
  }
}
}
export { Fleet };