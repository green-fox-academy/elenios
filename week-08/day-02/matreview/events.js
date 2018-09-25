const click = document.querySelector( '.click' );
const hover = document.querySelector( '.hover' );
const leave = document.querySelector( '.leave' );
const key = document.querySelector( '.key' );
const bubbling = document.querySelector( '.bubbling' );
const form = document.querySelector( '.form' );

const blur = document.querySelector( '.blur' );
const change = document.querySelector( '.change' );
const focus = document.querySelector( '.focus' );
const select = document.querySelector( '.select' );

const getRandom = () => {
  return Math.floor( Math.random() * 255 )
};
const getRandomColor = () => {
  return `rgb(${ getRandom() }, ${ getRandom() }, ${ getRandom() })`
};
const callback = ( event ) => {
  event.target.style.backgroundColor = getRandomColor();
};

// click.onclick = callback;
click.addEventListener( 'click', callback );
hover.addEventListener( 'mouseenter', callback );
leave.addEventListener( 'mouseleave', callback );

blur.addEventListener( 'blur', callback );
change.addEventListener( 'change', callback );
focus.addEventListener( 'focus', callback );
select.addEventListener( 'select', callback );

document.addEventListener( 'keydown', ( event ) => {
  key.innerHTML = `Keycode ${ event.keyCode }`
} );

bubbling.addEventListener( 'click', () => {
  if ( event.target.dataset.action === 'one' ) {
    console.log( event.target.innerHTML );
  } else if ( event.target.dataset.action === 'two' ) {
    console.log( event.target.innerHTML );
  }
} );

form.addEventListener( 'submit', ( event ) => {
  event.preventDefault();
  const {blur, change, focus, select} = event.target.elements;
  obj = { 
    blur: blur.value,
    focus: focus.value,
    change: change.value,
    select: select.value,
  }
  console.log(obj);
} );