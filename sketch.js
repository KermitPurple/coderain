let spacing = 25;
let trails = [];
let colorScheme = 1;

function setup(){
	createCanvas(window.innerWidth - 20, window.innerHeight - 20);
	textSize(32);
	frameRate(35);
	createTrails();
}

function createTrails(){
	for(let i = 0; i < width; i += spacing){
		trails.push(Trail.random(i))
	}
}

function draw(){
	background(0);
	for(let i = 0; i < trails.length; i++){
		trails[i].draw();
		trails[i].update();
		if(trails[i].dead){
			trails[i] = Trail.random(trails[i].pos.x);
		}
	}
}

function windowResized() {
	resizeCanvas(window.innerWidth - 20, window.innerHeight - 20);
	trails = [];
	createTrails();
}

function keyPressed(){
	if(keyCode > 48 && keyCode <= 57){
		console.log(int(key));
		colorScheme = int(key);
	}
}
