'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function drawLineToCenter (moveToX: number, moveToY: number){
    
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
}

for (let i = 0; i < 3; i++) {
    drawLineToCenter (i * 50, i * 100);
}


