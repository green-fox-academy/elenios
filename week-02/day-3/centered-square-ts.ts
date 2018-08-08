'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let color = 'green'
let squareSize = 5;

ctx.fillStyle = 'green';
ctx.fillRect((canvas.width/2)-squareSize, (canvas.height/2)-squareSize, 5, 5)


/*
function drawColourfulLine (moveToX: number, moveToY: number, lineToX: number, lineToY: number, color: string){ 
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.strokeStyle = color;
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke();
}   

drawColourfulLine((canvas.width/2)-squareSize, (canvas.height/2)-squareSize, (canvas.width/2)-squareSize, (canvas.height/2)+squareSize, 'color');
drawColourfulLine((canvas.width/2)-squareSize, (canvas.height/2)+squareSize, (canvas.width/2)+squareSize, (canvas.height/2)+squareSize, 'color');
drawColourfulLine((canvas.width/2)+squareSize, (canvas.height/2)+squareSize, (canvas.width/2)+squareSize, (canvas.height/2)-squareSize, 'color');
drawColourfulLine((canvas.width/2)+squareSize, (canvas.height/2)-squareSize, (canvas.width/2)-squareSize, (canvas.height/2)-squareSize, 'color');
*/