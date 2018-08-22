'use strict'

import { Aircraft } from './aircraft';
import { F16 } from './f16'
import { F35 } from './f35'
import { Carrier } from './carrier'

let carrier1 = new Carrier(5000, 70);
let carrier2 = new Carrier(4000, 100);
let aircraft1 = new F16();
let aircraft2 = new F16();
let aircraft3 = new F16();
let aircraft4 = new F35();
let aircraft5 = new F35();
let aircraft6 = new F16();
let aircraft7 = new F16();
let aircraft8 = new F35();
let aircraft9 = new F35();
let aircraft10 = new F35();
carrier1.add(aircraft1);
carrier1.add(aircraft2);
carrier1.add(aircraft3);
carrier1.add(aircraft4);
carrier1.add(aircraft5);
carrier2.add(aircraft6);
carrier2.add(aircraft7);
carrier2.add(aircraft8);
carrier2.add(aircraft9);
carrier2.add(aircraft10);
carrier1.getStatus();
carrier2.getStatus();
carrier1.fill();
carrier2.fill();
carrier1.getStatus();
carrier2.getStatus();
carrier1.fight(carrier2);
carrier2.fight(carrier1);
carrier1.getStatus();
carrier2.getStatus();
carrier1.fill();
carrier2.fill();
carrier1.getStatus();
carrier2.getStatus();
carrier1.fight(carrier2);
carrier2.fight(carrier1);
