'use strict'
import { Person } from './person';
import { Student } from './student';
import { Mentor } from './mentor';
import { Psychologist } from './psychologist';

export class Arena {
  name: string;
  champions: object[];

  constructor(name: string) {
    this.name = name;
    this.champions = [];
  }

  enlist(person: Person) {
    this.champions.push(person);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  round() {
    let roundCounter = 1;
    let champion = [];
    while (roundCounter !== 6) {
      if (roundCounter == 5) {
        let nameOfTheChamp = champion[0].name;
        console.log(`\r\n \r\n \r\nLADIES AND GENTLEMAN, WE HAVE A WINNER! THE ULTIMATE CHAMPION OF THE GREEN FOX ARENA IS: ${nameOfTheChamp} \r\n \r\n \r\n`);
        roundCounter++
      } else if (roundCounter == 4) {
        console.log(`\r\n \r\n \r\n THE FINAL ROUND HAS BEGAN \r\n \r\n \r\n`);
        let champs3 = [];
        for (let i = 0; i < this.champions.length; i++) {
          champs3.push(this.champions[i]);
        }
        champs3[0].finalFight(champs3[1], champs3[2]);
        champs3.forEach(element => {
          if (element.defeated === false) {
            champion.push(element);
          }
        });
        roundCounter++
      } else if (roundCounter < 4) {
        console.log(`\r\n \r\n \r\n ROUND ${roundCounter} HAS BEGAN \r\n \r\n \r\n`);

        let champs = [];
        let champs2 = [];
        let champsAlive = [];

        for (let i = 0; i < this.champions.length; i++) {
          if (i % 2 == 1) {
            champs.push(this.champions[i]);
          } else {
            champs2.push(this.champions[i]);
          }
        }

        for (let i = 0; i < this.champions.length / 2; i++) {
          champs[i].fight(champs2[i]);
        }
        console.log(`\r\n \r\n \r\n ROUND ${roundCounter} HAS ENDED \r\n \r\n \r\n`);

        for (let i = 0; i < champs.length; i++) {
          if (champs[i].defeated === false) {
            champsAlive.push(champs[i])
          }
        }

        for (let i = 0; i < champs2.length; i++) {
          if (champs2[i].defeated === false) {
            champsAlive.push(champs2[i])
          }
        }

        this.champions = champsAlive;
        roundCounter++
      }
    }
  }
}

let greenfoxacademy: Arena = new Arena('Green Fox Academy');

let andris: Student = new Student('Andris');
greenfoxacademy.enlist(andris);
let vmark: Student = new Student('V.Mark');
greenfoxacademy.enlist(vmark);
let milos: Student = new Student('Milos');
greenfoxacademy.enlist(milos);
let jenny: Student = new Student('Jenny');
greenfoxacademy.enlist(jenny);
let boglarka: Student = new Student('Boglarka');
greenfoxacademy.enlist(boglarka);
let kdani: Student = new Student('K.Dani');
greenfoxacademy.enlist(kdani);
let kamilla: Student = new Student('Kamilla');
greenfoxacademy.enlist(kamilla);
let easter: Student = new Student('Easter');
greenfoxacademy.enlist(easter);
let judit: Student = new Student('Judit');
greenfoxacademy.enlist(judit);
let soma: Student = new Student('Soma');
greenfoxacademy.enlist(soma);
let kinga: Student = new Student('Kinga');
greenfoxacademy.enlist(kinga);
let kitta: Student = new Student('Kitta');
greenfoxacademy.enlist(kitta);
let rudi: Student = new Student('Rudi');
greenfoxacademy.enlist(rudi);
let tibi: Student = new Student('Tibi');
greenfoxacademy.enlist(tibi);
let adam: Student = new Student('Adam');
greenfoxacademy.enlist(adam);
let gabor: Student = new Student('Gabor');
greenfoxacademy.enlist(gabor);
let david: Student = new Student('David');
greenfoxacademy.enlist(david);
let bdani: Student = new Student('B.Dani');
greenfoxacademy.enlist(bdani);
let gergo: Student = new Student('Gergo');
greenfoxacademy.enlist(gergo);
let jani: Student = new Student('Jani');
greenfoxacademy.enlist(jani);
let beszter: Student = new Student('B.Eszter');
greenfoxacademy.enlist(beszter);
let fruzsi: Psychologist = new Psychologist('Fruzsi');
greenfoxacademy.enlist(fruzsi);
let arnika: Mentor = new Mentor('Arnika');
greenfoxacademy.enlist(arnika);
let kmark: Mentor = new Mentor('K.Mark');
greenfoxacademy.enlist(kmark);

greenfoxacademy.shuffleArray(greenfoxacademy.champions);

greenfoxacademy.round();








