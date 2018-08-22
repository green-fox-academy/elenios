'use strict'

export abstract class Vehicle {
  name: string;
  fuel: number;
  tank: number;

  constructor(name: string, fuel: number, tank: number) {
    this.name = name;
    this.fuel = fuel;
    this.tank = tank;
  }
}