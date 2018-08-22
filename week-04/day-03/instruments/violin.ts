'use strict'
import { StringedInstrument } from './stringedinstrument'

export class Violin extends StringedInstrument {
  
  constructor() {
    super('Violin', 4)
  }
  
  sound() {
    return 'Screech';
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }

}