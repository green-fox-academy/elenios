'use strict'

export class Plant {
  plantType: string;
  color: string;
  waterLevel: number;
  waterAbsorb: number;
  wateringAt: number;

  constructor(plantType: string, color: string, waterAbsorb: number, wateringAt: number) {
    this.plantType = plantType;
    this.color = color;
    this.waterLevel = 0;
    this.waterAbsorb = waterAbsorb;
    this.wateringAt = wateringAt;
  }
}