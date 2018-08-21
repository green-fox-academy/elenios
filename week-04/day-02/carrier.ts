'use strict'

import { Aircraft } from './aircraft';

export class Carrier {
  aircrafts: Aircraft[];
  health: number;
  storeOfAmmo: number;

  constructor(health: number, storeOfAmmo: number) {
    this.health = health;
    this.storeOfAmmo = storeOfAmmo;
    this.aircrafts = [];
  }

  add(aircraft: Aircraft) {
    this.aircrafts.push(aircraft);
  }

  fill() {
    this.aircrafts.forEach(element => {
      this.storeOfAmmo = element.refill(this.storeOfAmmo) 
    });
  }

  fight(otherCarrier: Carrier) {
    let totalDamage: number = 0;
    this.aircrafts.forEach(element => {
      totalDamage += element.damage * element.currentAmmo
    });
    otherCarrier.health -= totalDamage;
  }

  getStatus() {
    let totalDamage: number = 0;
    this.aircrafts.forEach(element => {
      totalDamage += element.damage * element.currentAmmo
    });
    console.log(`HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.storeOfAmmo}, Total damage: ${totalDamage}.\nAircrafts:`);     
    this.aircrafts.forEach(element => {
      console.log(element.getStatus());
    });
  }
}