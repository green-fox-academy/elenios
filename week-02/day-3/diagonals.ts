'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

let diagonalColor: string = 'red'


function drawColourfulLine (moveToX: number, moveToY: number, lineToX: number, lineToY: number, color: string){
    if (moveToX == 0 && moveToY == 0){
        color = 'green'
    }
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.strokeStyle = color;
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke();
}

drawColourfulLine(0, 0, canvas.width, canvas.height, diagonalColor);
drawColourfulLine(0, canvas.height, canvas.width, 0, diagonalColor);

