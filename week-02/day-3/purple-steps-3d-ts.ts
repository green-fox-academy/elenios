'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function drawSquare(side: number) {
    let start = side;
    let size = side;
    ctx.fillStyle = 'purple';
    for (let i = 0; 6 > i; i++) {
        size = side * (i + 1)
        ctx.fillRect(start, start, size, size);
        start += size
    }
}
drawSquare(15);

