'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function linesToCenter(moveToX: number, moveToY: number) {

    for (let i = 0; i <= canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(moveToX + i, moveToY)
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
    }
    for (let j = 0; j <= canvas.width; j += 20) {
        ctx.beginPath();
        ctx.moveTo(moveToX + j, canvas.height);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
    }
    for (let k = 0; k <= canvas.height; k += 20) {
        ctx.beginPath();
        ctx.moveTo(moveToX, moveToY + k);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
    }
    for (let l = 0; l <= canvas.height; l += 20) {
        ctx.beginPath();
        ctx.moveTo(canvas.width, moveToY + l);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
    }
}

linesToCenter(0, 0);