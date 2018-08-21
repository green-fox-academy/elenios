'use strict'

import { Plant } from './plant'
import { Tree } from './tree'
import { Flower } from './flower'

// The Garden
// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

export class Garden {
  plants: Plant[] = [];

  addPlant(plant) {
    console.log(plant);
    this.plants.push(plant);
  }

  getInfo() {
    this.plants.forEach(element => {
      if (element.waterLevel < element.wateringAt) {
        console.log(`The ${element.color} ${element.plantType} needs water.`);
      } else {
        console.log(`The ${element.color} ${element.plantType} doesn't need water.`);
      }
    });
  }
  
  watering(waterAmount: number) {
    console.log(`Watering with ${waterAmount}`);
    let plantsNeedWater = 0;
    this.plants.forEach(element => {
      if (element.waterLevel < element.wateringAt) {
        plantsNeedWater++
      }
    });
    this.plants.forEach(element => {
      if (element.waterLevel < element.wateringAt) {
        element.waterLevel += (waterAmount / plantsNeedWater) * element.waterAbsorb
      }
    });
  }
}