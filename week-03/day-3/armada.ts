// Create an Armada class
// Contains Ship-s as a list
// Have a armada.war(otherArmada) method where two armada can engage in war
// it should work like merge sort
// first ship from the first armada battles the first of the other
// the loser gets skipped so the next ship comes in play from that armada
// whichever armada gets to the end of its ships loses the war
// return true if this is the winner
import { Ship } from "./pirate-ship"

class Armada {
  name: string;
  listOfShips: Ship[]

  constructor(name: string) {
    this.name = name;
    this.listOfShips = [];
  }

  fillArmada() {
    let numberOfShips = Math.ceil(Math.random() * 10);
    for (let i = 0; i < numberOfShips; i++) {
      this.listOfShips.push(new Ship);
    }
    this.listOfShips.forEach(element => {
      element.fillShip();
    });
  }

  war(otherArmada: Armada) {
    let group1 = this.listOfShips;
    let group2 = otherArmada.listOfShips;

    while (group1.length > 0 || group2.length > 0) {
      if (group1[0].battle(group2[0]) === true) {
        group2.splice(0, 1);
        console.log(`\r\nThe ${otherArmada.name} has lost a ship.`);
        console.log(`The remaining ships of ${this.name}: ${group1.length}`);
        console.log(`The remaing ships of ${otherArmada.name}: ${group2.length}`);        
      } else if (group1[0].battle(group2[0]) === false) {
        group1.splice(0, 1);
        console.log(`\r\nThe ${this.name} has lost a ship!`);
        console.log(`The remaining ships of ${this.name}: ${group1.length}`);
        console.log(`The remaing ships of ${otherArmada.name}: ${group2.length}`); 
      }
      if (group1.length == 0) {
        console.log(`\r\nTHE ${this.name.toUpperCase()} HAS LOST THE WAR.\r\nThe armada of the ${otherArmada.name} is throwing a victorious party and getting drunk af.\r\n`);
        return false;
      } else if (group2.length == 0) {
        console.log(`\r\nTHE ${this.name.toUpperCase()} HAS WON THE WAR!\r\nThe armada of the ${otherArmada.name} is crushed to ashes.\r\n`);
        return true;
      }
    }
  }
}

let snakes = new Armada('snakes');
let blades = new Armada('blades');
snakes.fillArmada();
blades.fillArmada();
snakes.war(blades);
