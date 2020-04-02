let spacing = 25;
let trails = [];
let vecTrails = [];
let colorScheme = 1;
let backScheme = 0;

function setup(){
	createCanvas(window.innerWidth - 20, window.innerHeight - 20);
	textSize(32);
	frameRate(35);
	//createTrails();
	vecTrails.push(VectorTrail.burst(0));
}

function createTrails(){
	for(let i = 0; i < width; i += spacing){
		trails.push(Trail.random(i))
	}
}

function draw(){
	let c = 0;
	if(backScheme == 0){
		c = 0
	}else if(backScheme == 1){
		c = 255
	}
	background(c);
	for(let i = 0; i < trails.length; i++){
		trails[i].draw();
		trails[i].update();
		if(trails[i].dead){
			trails[i] = Trail.random(trails[i].pos.x);
		}
	}
	for(let i = vecTrails.length - 1; i >= 0; i--){
		vecTrails[i].draw();
		vecTrails[i].update();
	}
}

function windowResized() {
	resizeCanvas(window.innerWidth - 20, window.innerHeight - 20);
	trails = [];
	createTrails();
}

function keyPressed(){
	if(keyCode > 48 && keyCode <= 57){
		colorScheme = int(key);
	}
	if(key == 'b'){
		backScheme += 1;
		backScheme = backScheme % 2;
	}
}

function mousePressed(){
	colorScheme += 1;
	if(colorScheme > 4){
		colorScheme = 1;
	}
}
