import { Comparable } from '../../comparable'

class Domino implements Comparable {

  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  compareTo(other: Comparable): number {
    if (this.values[0] > other.values[0]) {
      return 1;
    } else if () {
      return 0;
    } else if () {
      return -1;
    }
  }
}

export { Domino };