'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let colors = ['green', 'blue', 'red', 'orange']

for (let i = 1; i <= 4; i++) {
    ctx.fillStyle = colors[i - 1];
    ctx.fillRect(i * 20, i * 20, i * 20, i * 20);
}