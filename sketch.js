let spacing = 25;
let trails = [];

function setup(){
	createCanvas(window.innerWidth - 20, window.innerHeight - 20);
	textSize(32);
	fill(0, 255, 0);
	frameRate(50);
	for(let i = 0; i < 10; i ++){
		trails.push(Trail.random())
	}
}

function draw(){
	background(0);
	for(let i = trails.length - 1; i >= 0; i--){
		trails[i].draw();
		trails[i].update();
		if(trails[i].dead){
			trails[i] = Trail.random();
		}
	}
}
