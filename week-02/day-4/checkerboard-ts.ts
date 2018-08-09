'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function numOfLines(num: number) {

    for (let i = num; i > 0; i--) {

        for (let j = 0; j < num; j++) {
            if (j % 2 == 1) {
                ctx.fillStyle = 'black';
                if (i % 2 == 1) {
                    ctx.fillStyle = 'black'
                } else {
                    ctx.fillStyle = 'gray'
                }
            } else {
                ctx.fillStyle = 'gray';
                if (i % 2 == 0) {
                    ctx.fillStyle = 'black'
                } else {
                    ctx.fillStyle = 'gray'
                }
            }
            ctx.fillRect(
                0 + (num - i) * (canvas.width / num),
                0 + (j) * (canvas.height / num),
                canvas.width / num,
                canvas.height / num
            );
        }
    }
}

numOfLines(8);