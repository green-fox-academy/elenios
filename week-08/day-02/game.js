'use-strict';

const candies = document.querySelector( '.candies' );
const candyCreater = document.querySelector( '.create-candies' );
const lollypops = document.querySelector( '.lollypops' );
const lollypopBuyer = document.querySelector( '.buy-lollypops' );
const lollypop = '🍭';

candyCreater.addEventListener( 'click', () => {
  candies.innerHTML++;
} );

lollypopBuyer.addEventListener( 'click', () => {
  if ( candies.innerHTML > 9 ) {
    lollypops.innerHTML += lollypop;
    candies.innerHTML -= 10;
  }
} );

setInterval( () => {
  if ( lollypops.innerHTML.lastIndexOf( '🍭' ) >= 18 ) {
    candies.innerHTML++;
  } 
}, 1000 );

