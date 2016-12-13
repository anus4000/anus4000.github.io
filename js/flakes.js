var flakes_canv = document.getElementById("flakes");

flakes_canv.style.position = "fixed";
flakes_canv.style.top = "0";
flakes_canv.style.left = "0";
var flakes_ctx = flakes_canv.getContext('2d');

var head = document.querySelector("head");
head.innerHTML = head.innerHTML + "<style>#flakes { pointer-events: none; }</style>";

flakes_canv.width = window.innerWidth;
flakes_canv.height = window.innerHeight;

var flakes = []
function flakes_initialize(){
	for(var i = 0; i < 100; i++){
		flakes.push({
			x: parseInt(Math.random() * window.innerWidth),
			initX: parseInt(Math.random() * window.innerWidth),
			y: parseInt(Math.random() * window.innerHeight),
			theta:	Math.random() * (Math.PI * 2)
		});
	}
}

function flakes_update(){
	flakes.forEach(function(flake){
		flake.y += 1;
		flake.x = flake.initX + (Math.sin(flake.theta) * 50);
		flake.theta += 0.01
	
		if(flake.y > window.innerHeight){
			flake.y = 0;
			flake.x = parseInt(Math.random() * window.innerWidth);
		}
	});
}

function flakes_draw(){
	flakes.forEach(function(flake){
		flakes_ctx.beginPath();
		flakes_ctx.arc(flake.x, flake.y, 5, 0, 2 * Math.PI, false);
		flakes_ctx.fillStyle = "rgba(255,255,255,0.9)";
		flakes_ctx.fill();
	});
}

flakes_initialize();
var main = window.setInterval(function(){
	flakes_ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	flakes_update();
	flakes_draw();
}, 1);
