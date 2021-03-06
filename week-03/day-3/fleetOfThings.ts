import { Thing } from "./things";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let milk = new Thing('Get milk');
let obstacles = new Thing('Remove the obstacles');
let standUp = new Thing('Stand up');
let lunch = new Thing ('Eat lunch');

fleet.add(milk);
fleet.add(obstacles);
fleet.add(standUp);
fleet.add(lunch);
standUp.complete();
lunch.complete();



fleet.print();
