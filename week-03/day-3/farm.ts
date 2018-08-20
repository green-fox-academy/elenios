import { Animal } from "./animal";

// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

class Farm {
  listOfAnimals: Animal[] = [];
  maximumSlots: number = 10;
  
  breed() {
    if (this.listOfAnimals.length < this.maximumSlots) {
        this.listOfAnimals.push(new Animal);
    } else {
      console.log('The farm is currently full.');
    }
  }
  slaughter() {
    let leastHungry = this.listOfAnimals[0]
    for (let i = 0; i < this.listOfAnimals.length; i++) {
      if (this.listOfAnimals[i].hunger < leastHungry.hunger) {
        leastHungry = this.listOfAnimals[i]
      }
    }
    this.listOfAnimals.splice(this.listOfAnimals.indexOf(leastHungry), 1);
  }
}

let farm = new Farm();
console.log(farm);
console.log(farm.listOfAnimals.length);
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
console.log(farm);
farm.slaughter();
console.log(farm);
farm.slaughter();
console.log(farm);


/*
console.log(farm);
console.log(farm.listOfAnimals.length);
farm.breed();
console.log(farm);
console.log(farm.listOfAnimals.length);
farm.slaughter();
farm.slaughter();
console.log(farm);
console.log(farm.listOfAnimals.length);
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();

console.log(farm);
console.log(farm.listOfAnimals.length);
*/