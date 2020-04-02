let spacing = 25;
let trails = [];

function setup(){
	createCanvas(window.innerWidth - 20, window.innerHeight - 20);
	textSize(32);
	fill(0, 255, 0);
	noStroke()
	frameRate(25);
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
