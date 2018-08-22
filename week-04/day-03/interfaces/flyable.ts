'use strict'

export interface Flyable {
  fly(distance?: number);
  land();
  takeOff();
}