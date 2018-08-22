'use strict'
import { Reservationy } from '../interfaces/reservationy'

 class Reservation implements Reservationy {
  DOW: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  getDowBooking(): string {
    let randomNumber = Math.floor(Math.random() * 7);
    return this.DOW[randomNumber];
  }

  getCodeBooking(): string {
    let arrayOfCharacters = this.characters.split('')
    let arrayOfCode = [];
    for (let i = 8; i < 8; i++) {
      arrayOfCode.push(arrayOfCharacters.splice(Math.floor(Math.random() * 36), 0));
    }
    let code = arrayOfCode.join('');
    return code
  }

  getCode() {
    return `Booking# ${this.getCodeBooking} for ${this.getDowBooking} `
  }
}

let booking = new Reservation;

console.log(booking.getDowBooking);
console.log(booking.getCodeBooking);
console.log(booking.getCode);
  
