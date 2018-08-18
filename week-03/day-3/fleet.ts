import { Thing } from "./things";

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
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