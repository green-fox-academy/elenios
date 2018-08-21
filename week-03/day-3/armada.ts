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
  listOfShips: Ship[] = [];

  fillArmada() {
    let numberOfShips = Math.ceil(Math.random() * 10);
    for (let i = 0; i < numberOfShips; i++) {
      this.listOfShips.push(new Ship);
    }
    this.listOfShips.forEach(element => {
      element.fillShip();
    });
  }
  
  // war(otherArmada) {
    //   let sortedListOfThisShip = this.listOfShips.crew.sort();
    //   let sortedListOfOtherShip = otherArmada.listOfShips.sort();
    //   console.log(sortedListOfThisShip);
    // console.log(sortedListOfOtherShip);
    
    
    // }
  }
  
  let snakes = new Armada;
  let blades = new Armada;
  snakes.fillArmada();
  console.log(snakes.listOfShips);
blades.fillArmada();
//snakes.war(blades);