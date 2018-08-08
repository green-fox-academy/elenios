'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function drawLine (moveToX: number, moveToY: number){
    
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(moveToX + 50, moveToY);
    ctx.stroke();
}

for (let i = 1; i <= 3; i++) {
    drawLine (0, i * 10);
}