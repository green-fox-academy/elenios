'use strict'
import { Aircraft } from './aircraft'

// Base damage: 30
// Max ammo: 8

export class F16 extends Aircraft {

  constructor() {
    super('F16', 30, 8);
  }
}