(function() {
	'use strict';
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.strokeStyle = '#BADA55';
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	
	let isDrawing = false;
	let lastX = 0;
	let lastY= 0;
	let hue =0;
	ctx.lineWidth=3;
	let trickWidth= true;


// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

function draw(e) {
	if (!isDrawing) return;
	//console.log(e)
	ctx.strokeStyle=`hsl(${hue},100%, 50%)`;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	hue++;
		//ctx.strokeStyle= getRandomColor();  //another way to color
		lastX=e.offsetX;
		lastY=e.offsetY;
		if (ctx.lineWidth>=60 || ctx.lineWidth<=1)
		{
			trickWidth = !trickWidth;
			console.log(trickWidth)
		}

		trickWidth ? ctx.lineWidth++ : ctx.lineWidth--;
			

		
	}

	canvas.addEventListener('mousemove' , draw);

	canvas.addEventListener('mousedown' ,(e) => {
		isDrawing = true; 
		lastX=e.offsetX;
		lastY=e.offsetY});
	canvas.addEventListener('mouseup' ,() => isDrawing = false);
	canvas.addEventListener('mouseout' ,() => isDrawing = false);


}())