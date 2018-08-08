'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.


function drawColourfulLine (moveToX: number, moveToY: number, lineToX: number, lineToY: number, color: string){
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.strokeStyle = color;
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke();
}

drawColourfulLine(50, 50, 50, 250, 'green');
drawColourfulLine(50, 250, 250, 250, 'red');
drawColourfulLine(250, 250, 250, 50, 'yellow');
drawColourfulLine(250, 50, 50, 50, 'blue');

/*
function drawColorfulRectangle(x: number, y: number, color: string[]) {

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = color[0];
    ctx.lineTo(x, y * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y * 2);
    ctx.strokeStyle = color[1];
    ctx.lineTo(x * 2, y * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x * 2, y * 2);
    ctx.strokeStyle = color[2];
    ctx.lineTo(x * 2, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x * 2, y);
    ctx.strokeStyle = color[3];
    ctx.lineTo(x, y);
    ctx.stroke();
}

drawColorfulRectangle(100, 100, colours)
*/