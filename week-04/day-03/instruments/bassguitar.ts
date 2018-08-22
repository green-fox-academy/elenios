'use strict'
import { StringedInstrument } from './stringedinstrument'

export class BassGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 4) {
    super('Bass Guitar', numberOfStrings)
  }
 
  sound() {
    return 'Duum-duum-duum';
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }

}