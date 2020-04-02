let spacing = 25;
let trails = [];
let colorScheme = 1;
let backScheme = 0;
let sync = true;
let previousBurst;

function setup(){
	createCanvas(window.innerWidth - 20, window.innerHeight - 20);
	textSize(32);
	frameRate(35);
	createTrails();
	previousBurst = createVector(width/2, height/2);
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
			if(trails[i].verticle){
				trails[i] = Trail.random(trails[i].pos.x);
			}else if(!sync){
				trails[i] = VectorTrail.burst(trails[i].angle);
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
	}else if(key == 'c'){
		burst();
	}else if(key == ' '){
		createTrails();
	}else if(key == 's'){
		sync = !sync;
	}
}

function mousePressed(){
	burst(mouseX, mouseY);
	previousBurst = createVector(mouseX, mouseY);
}

function burst(x = width/2, y = height/2){
	trails = [];
	for(let i = 0; i < TWO_PI; i += TWO_PI/50){
		trails.push(VectorTrail.burst(i, x, y));
	}
}
