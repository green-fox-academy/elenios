'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, canvas.width, canvas.height);

function star(x: number) {
    for (let i = 0; i < x; i++) {
        let randomPosition = Math.floor(Math.random() * canvas.width + 1);
        let randomPosition2 = Math.floor(Math.random() * canvas.height + 1);
        let randomColor = Math.floor(Math.random() * 255);;
        ctx.fillStyle = 'rgb(' + randomColor + ',' + randomColor + ',' + randomColor + ')';
        ctx.fillRect(randomPosition, randomPosition2, 5, 5);
    }
}
star(200);