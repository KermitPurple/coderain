let spacing = 25;
let trails = [];
let colorScheme = 1;
let backScheme = 0;

function setup(){
	createCanvas(window.innerWidth - 20, window.innerHeight - 20);
	textSize(32);
	frameRate(35);
	//createTrails();
	burst();
}

function createTrails(){
	trails = [];
	for(let i = 0; i < width; i += spacing){
		trails.push(Trail.random(i))
	}
}

function draw(){
	if(trails.length == 0){
		createTrails();
	}
	let c = 0;
	if(backScheme == 0){
		c = 0
	}else if(backScheme == 1){
		c = 255
	}
	background(c);
	allDead = true
	for(let i = trails.length - 1; i >= 0; i--){
		trails[i].draw();
		trails[i].update();
		if(trails[i].dead){
			if(trails[i].respawn){
				trails[i] = Trail.random(trails[i].pos.x);
			}
		}else{
			allDead = false;
		}
	}
	if(allDead){
		burst();
	}
}

function windowResized() {
	resizeCanvas(window.innerWidth - 20, window.innerHeight - 20);
	createTrails();
}

function keyPressed(){
	if(keyCode > 48 && keyCode <= 57){
		colorScheme = int(key);
	}else if(key == 'b'){
		backScheme += 1;
		backScheme = backScheme % 2;
	}if(key == 'c'){
		burst();
	}if(key == ' '){
		createTrails();
	}
}

function mousePressed(){
	colorScheme += 1;
	if(colorScheme > 4){
		colorScheme = 1;
	}
}

function burst(){
	trails = [];
	for(let i = 0; i < TWO_PI; i += TWO_PI/60){
		trails.push(VectorTrail.burst(i));
	}
}
