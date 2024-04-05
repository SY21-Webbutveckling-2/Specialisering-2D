/**
 * @type {HTMLCanvasElement}
 */
let myCanvas = document.getElementById('my-canvas');
let ctx = myCanvas.getContext('2d');

function initCanvas() {

	ctx.fillStyle = 'black';

	ctx.beginPath();

	ctx.rect(0, 0, myCanvas.width, myCanvas.height);

	ctx.closePath();
	ctx.fill();


	ctx.fillStyle = 'red';
	ctx.strokeStyle = 'yellow';
	ctx.lineWidth = 5;

	ctx.beginPath();

	// ctx.rect(100, 100, 200, 200);
	// ctx.moveTo(100, 100);
	// ctx.lineTo(300, 100);
	// ctx.lineTo(250, 250);
	// ctx.lineTo(100, 300);
	// ctx.lineTo(100, 100);

	ctx.moveTo(myCanvas.width / 2, myCanvas.height / 2);
	ctx.lineTo(myCanvas.width / 2, myCanvas.height / 2 - 100);
	ctx.arc(myCanvas.width / 2, myCanvas.height / 2, 100, -Math.PI / 2, Math.PI);
	ctx.lineTo(myCanvas.width / 2, myCanvas.height / 2);

	ctx.

	ctx.closePath();
	ctx.fill();
	ctx.stroke();
}

window.addEventListener('resize', function () {
	resizeCanvas();
	initCanvas();
});

function resizeCanvas() {
	myCanvas.width = myCanvas.clientWidth;
	myCanvas.height = myCanvas.clientHeight;
}

resizeCanvas();
initCanvas();