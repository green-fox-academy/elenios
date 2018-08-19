'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(canvas.width / 4, 10);
ctx.lineTo(canvas.width * 3 / 4, 10);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(canvas.width * 3 / 4, 10);
ctx.lineTo(canvas.width - 10, canvas.height / 2);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(canvas.width - 10, canvas.height / 2);
ctx.lineTo(canvas.width * 3 / 4, canvas.height - 10);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(canvas.width * 3 / 4, canvas.height - 10);
ctx.lineTo(canvas.width / 4, canvas.height - 10);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(canvas.width / 4, canvas.height - 10);
ctx.lineTo(10, canvas.height / 2);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(10, canvas.height / 2);
ctx.lineTo(canvas.width / 4, 10);
ctx.stroke();