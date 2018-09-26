'use-strict';

const candies = document.querySelector( '.candies' );
const candyCreater = document.querySelector( '.create-candies' );
const lollypops = document.querySelector( '.lollypops' );
const lollypopBuyer = document.querySelector( '.buy-lollypops' );
const lollypop = '🍭';
const speed = document.querySelector( '.speed' );
let time = 0;
const candyRain = document.querySelector( '.candy-machine' );
let candy = 0;
let candyGeneration = 0;
let multiplicator = 1;

candyCreater.addEventListener( 'click', () => {
  candy++;
  candies.innerHTML = candy;
} );

lollypopBuyer.addEventListener( 'click', () => {
  candyGeneration = Math.floor(lollypops.innerHTML.length / 18);
  if ( candies.innerHTML > 9 ) {
    lollypops.innerHTML += lollypop;
    candy -= 10;
    candies.innerHTML = candy;
  }
} );

setInterval( () => {
  candy += candyGeneration * multiplicator;
  candies.innerHTML = candy;
  time++;
  speed.innerHTML = candies.innerHTML / time;
  if (candy >= 10000) {
    alert('Congratulations! You\'ve reached 10.000 candies!')
  }
}, 1000 );

candyRain.addEventListener( 'click', () => {
  if (multiplicator === 1) {
    multiplicator = 10;
  } else {
    multiplicator += 10;
  }
} );
