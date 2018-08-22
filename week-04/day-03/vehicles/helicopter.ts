import { Vehicle } from "./vehicle";
import { Flyable } from "../interfaces/flyable";

'use strict'

export class Helicopter extends Vehicle implements Flyable {
  name: string;
  fuel: number;
  tank: number;

  constructor(name: string, fuel: number, tank: number) {
    super(name, fuel, tank);
  }

  fly(distanceInKm: number) {
    let consumption: number = distanceInKm / 10;
    if (this.fuel >= consumption) {
      this.fuel -= consumption;
      console.log(`${this.name} flew ${distanceInKm}km and burnt ${consumption}l fuel.`);
    } else {
      console.log(`There is not enough fuel for the desired distance, please refill the tank.`);
    }
  }

  land() {
    console.log(`${this.name} safely lands.`);
  }

  takeOff() {
    if (this.fuel > 10) {
      this.fuel -= 1;
      console.log(`${this.name} takes off to fly.`);
    } else {
      console.log(`${this.name} there is not enough fuel to fly, please refill the tank.`);
    }

  }

}