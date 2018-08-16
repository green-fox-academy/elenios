/*
Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value
*/

class Counter {
  private integer: number;
  private initialValue: number;
  constructor(integer?: number) {
    if (integer != undefined) {
      this.integer = integer
    } else {
      this.integer = 0;
    }
    this.initialValue = this.integer
  }
  add(value?: number) {
    if (value != undefined) {
      this.integer += value;
    } else {
      this.integer++
    }
  }
  get() {
    let toString = this.integer.toString();
    console.log(toString);

  }
  reset() {
    this.integer = this.initialValue;
  }
}

let number: Counter = new Counter(5);
console.log(number);
number.add(9)
console.log(number);
number.get();
number.reset();
console.log(number);