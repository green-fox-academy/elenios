'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function drawSquare(side: number) {
    ctx.fillStyle = 'purple';
    for (let i = 0; 20 > i; i++) {
        ctx.fillRect(side + i * side, side + i * side, side, side);
    }
}
drawSquare(20);