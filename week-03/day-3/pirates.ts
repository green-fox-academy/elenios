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
export { Pirate };