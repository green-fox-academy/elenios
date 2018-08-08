'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let rainbow = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink'];

function drawRectangle(x: number, color: string[]) {
    color.reverse();
    for (let i = 9; i > 1; i--) {
        ctx.fillStyle = color[i - 2];
        ctx.fillRect(
            (canvas.width / 6) + (x / 2) * (9 - i),
            0 + (x / 2) * (9 - i),
            x * (i - 1),
            x * (i - 1)
        );
    }
}
drawRectangle(50, rainbow);

/*
function rainBowBox(lineWidth) {
    let rainbowColors: string[] = ['red', 'orange', 'yellow', 'lawngreen', 'dodgerblue', 'mediumblue', 'darkviolet'];
    function drawSquare(size: number, color: string) {
        ctx.fillStyle = color;
        ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size);
    }

    for (let i: number = 400; i > 0; i -= lineWidth) {
        drawSquare(i, rainbowColors[i % rainbowColors.length]); 
    }
}
rainBowBox(100);
*/