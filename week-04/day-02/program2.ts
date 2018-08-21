'use strict'

import { Aircraft } from './aircraft';
import { F16 } from './f16'
import { F35 } from './f35'
import { Carrier } from './carrier'

let carrier = new Carrier(2000, 200);
let aircraft1 = new F16();
let aircraft2 = new F16();
let aircraft3 = new F16();
let aircraft4 = new F35();
let aircraft5 = new F35();
carrier.add(aircraft1);
carrier.add(aircraft2);
carrier.add(aircraft3);
carrier.add(aircraft4);
carrier.add(aircraft5);
carrier.getStatus();
carrier.fill();
carrier.getStatus();

