'use strict'

import { Garden } from './garden'
import { Tree } from './tree'
import { Flower } from './flower'

let garden = new Garden();
let yellowFlower = new Flower('yellow');
let blueFlower = new Flower('blue');
let purpleTree = new Tree('purple');
let orangeTree = new Tree('orange');
garden.addPlant(yellowFlower);
garden.addPlant(blueFlower);
garden.addPlant(purpleTree);
garden.addPlant(orangeTree);
garden.getInfo();
garden.watering(40);
garden.getInfo();
garden.watering(70);
garden.getInfo();
