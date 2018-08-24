// Create a Pirate class. While you can add other fields and methods, you must have these methods:-

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following. - 
// die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead. - 
// brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.

// And... if you get that far...

// Add a parrot.

 class Pirate {
  intoxication: number = 0;
  awaken: boolean = true;
  alive: boolean = true;

  drinkSomeRum() {
    if (this.alive = true) {
      this.intoxication += Math.ceil(Math.random() * 5)
    } else {
      console.log('This Pirate is dead');
    }
  }
  howsItGoingMate() {
    if (this.alive = true) {
      if (this.intoxication <= 4) {
        console.log('"Pour me anudder!"');
      } else {
        console.log('"Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?"');
        this.awaken = false;
      }
    } else {
      console.log('This Pirate is dead');
    }
  }
  die() {
    this.alive = false;
  }
  brawl(otherPirate: Pirate) {
    if (this.alive = true) {
      if (otherPirate.alive == true) {
        let fate: number = Math.ceil(Math.random() * 3);
        if (fate == 1) {
          this.die();
        } else if (fate == 2) {
          otherPirate.die();
        } else if (fate == 3) {
          this.awaken = false;
          otherPirate.awaken = false;
        }
      } else {
        console.log('The opponent Pirate is dead.');
      }
    } else {
      console.log('This Pirate is dead');
    }
  }
}

// Create a Ship class.
// The Ship stores Pirate-s instances in a list as the crew and has one captain who is also a Pirate.
// When a ship is created it doesn't have a crew or a captain.
// The ship can be filled with pirates and a captain via fillShip() method.
// Filling the ship with a captain and random number of pirates.
// Ships should be represented in a nice way on command line including information about
// captains consumed rum, state (passed out / died)
// number of alive pirates in the crew
// Ships should have a method to battle other ships: ship.battle(otherShip)
// should return true if the actual ship (this) wins
// the ship should win if its calculated score is higher
// calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
// The loser crew has a random number of losses (deaths).
// The winner captain and crew has a party, including a random number of rum :)

 class Ship {
  captain: Pirate = new Pirate;
  crew: Pirate[] = [];
  numberOfCrew: number = this.crew.length;

  fillShip() {
    let numberOfPirates = Math.ceil(Math.random() * 20);
    let captain = this.captain;
    for (let i = 0; i < numberOfPirates; i++) {
      this.crew.push(new Pirate);
    }
  }
  getInfo() {
    if (this.captain.alive === true && this.captain.awaken === true) {
      console.log('The state of the captain: Alive and Awoken. Amount of rum consumed: ' + this.captain.intoxication);
    } else if (this.captain.alive === true && this.captain.awaken === false) {
      console.log('The state of the captain: Alive, but passed out. Amount of rum consumed: ' + this.captain.intoxication);
    } else if (this.captain.alive === false) {
      console.log('The state of the captain: Dead.');
    }
    let counterOfAlivePirates = 0;
    for (let i = 0; i < this.crew.length; i++) {
      if (this.crew[i].alive === true)
        counterOfAlivePirates++
    }
    console.log('Number of alive pirates: ' + counterOfAlivePirates);
  }
  battle(otherShip: Ship) {
    let rounds: number = this.crew.length;
    if (this.crew.length > otherShip.crew.length) {
      rounds = otherShip.crew.length
    }
    this.captain.brawl(otherShip.captain);
    for (let i = 0; i < rounds; i++) {
      this.crew[i].brawl(otherShip.crew[i]);
    }
    let scoreOfThisShip = 0;
    let scoreOfOtherShip = 0;
    scoreOfThisShip += this.captain.intoxication;
    scoreOfOtherShip += otherShip.captain.intoxication;
    this.crew.forEach(element => {
      if (element.alive == true) {
        scoreOfThisShip++
      }
    });
    otherShip.crew.forEach(element => {
      if (element.alive == true) {
        scoreOfOtherShip++
      }
    });
    if (scoreOfThisShip > scoreOfOtherShip) {
      console.log('This Ship has WON.');      
      return true;
    } else {
      console.log('This Ship has LOST.');
      return false;
    }
  }

}
/*
let redSnakes = new Ship;
let blackBlades = new Ship;
redSnakes.fillShip();
blackBlades.fillShip();
redSnakes.getInfo();
blackBlades.getInfo();
redSnakes.battle(blackBlades);
redSnakes.getInfo();
blackBlades.getInfo();
*/