// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

import { Sharpie } from "./sharpie";

class SharpieSet {
  sharpies: Sharpie[];
  sharpie1: Sharpie;
  sharpie2: Sharpie;
  sharpie3: Sharpie;
  sharpie4: Sharpie;
  sharpie5: Sharpie;

  constructor() {
    this.sharpies = [
      this.sharpie1 = new Sharpie('red', 2),
      this.sharpie2 = new Sharpie('blue', 2),
      this.sharpie3 = new Sharpie('green', 2),
      this.sharpie4 = new Sharpie('yellow', 2),
      this.sharpie5 = new Sharpie('orange', 2)
    ];
  }
  countUseable() {
    let counter = [];
    this.sharpies.forEach(element => {
      if (element.inkAmount > 0) {
        counter.push(element);
      }
    });
    console.log(counter.length);
  }
  removeTrash() {
    this.sharpies.forEach(element => {
      if (element.inkAmount <= 0) {
        this.sharpies.splice(this.sharpies.indexOf(element), 1);
      }
    });
  }
}

let beginnerSet = new SharpieSet();

beginnerSet.countUseable();
