'use strict'
import { Aircraft } from './aircraft'

// Base damage: 50
// Max ammo: 12

export class F35 extends Aircraft {

  constructor() {
    super('F35', 50, 12);
  }
}