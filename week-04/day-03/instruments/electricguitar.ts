'use strict'
import { StringedInstrument } from './stringedinstrument'

export class ElectricGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 6) {
    super('Electric Guitar', numberOfStrings)
  }

  sound() {
    return 'Twang';
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
  
}