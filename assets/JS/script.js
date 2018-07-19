var c = document.getElementById('ice-cream');
var ctx = c.getContext('2d');
ctx.lineWidth = 3;

//Flavor on top
ctx.beginPath();
ctx.arc(200, 100, 50, 0, Math.PI, true);

// Color of ice
ctx.fillStyle = '#8A0908';
ctx.fill();
ctx.stroke();

// Start of ice-cream
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 100);
ctx.lineTo(200, 250);
ctx.closePath();

// Color 
ctx.fillStyle = '#AA6522';
ctx.fill();
ctx.stroke();
