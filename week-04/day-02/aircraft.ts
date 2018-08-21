'use strict'

// Create a class that represents an aircraft
// There are 2 types of aircrafts: F16 and F35
// Both aircraft should track how many ammo it has

export class Aircraft {
  type: string;
  damage: number;
  currentAmmo: number;
  ammoCapacity: number;

  constructor(type: string, damage: number, ammoCapacity: number) {
    this.type = type;
    this.damage = damage;
    this.currentAmmo = 0;
    this.ammoCapacity = ammoCapacity;
  }

  fight() {
    let damageDone = this.currentAmmo * this.damage;
    return damageDone;
  }

  refill(ammo: number) {
    let substract = 0;
    if (ammo + this.currentAmmo > this.ammoCapacity) {
      substract += (this.ammoCapacity - this.currentAmmo);      
      this.currentAmmo = this.ammoCapacity;
      return ammo - substract;
    } else if (ammo + this.currentAmmo <= this.ammoCapacity) {
      this.currentAmmo += ammo;
      return 0;
    } else {
      return ammo;
    }
  }

  getType() {
    return this.type;
  }

  getStatus() {
    return `Type: ${this.type}, Ammo: ${this.currentAmmo}, Base damage: ${this.damage}, All damage: ${this.damage * this.currentAmmo}`
  }

  isPriority() {
    if (this.type === 'F35') {
      return true;
    } else if (this.type === 'F16') {
      return false;
    }
  }
}