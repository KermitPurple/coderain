class VectorTrail extends Trail{
	constructor(x = 0, y = 0, length = 0, chlist = [], index = 0, topLength = 0, angle = 0){
		super(x, y, length, chlist, index, topLength)
		this.dead = false;
		this.angle = angle
		let vx = cos(angle);
		let vy = sin(angle);
		this.vel = createVector(vx, vy);
		this.vel.setMag(spacing);
	}

	draw(){
		if(this.length == this.topLength){
			if(backScheme == 0){
				fill(255);
			}else if(backScheme == 1){
				fill(0);
			}
		}else{
			let c = this.getColor();
			c.setAlpha(this.length / this.topLength * 155 + 100);
			fill(c);
		}
		text(this.chlist[this.index], this.pos.x, this.pos.y);
		if(this.length > 1){
			new VectorTrail(
				this.pos.x - this.vel.x, 
				this.pos.y - this.vel.y,
				this.length - 1,
				this.chlist,
				this.index + 1,
				this.topLength,
				this.angle
			).draw();
		}
	}

	update(){
		this.pos.add(this.vel);
		if(this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height){
			this.dead = true;
		}
	}

	static burst(angle = 0){
		let list = VectorTrail.randomChlist();
		return new VectorTrail(width/2, height/2, list.length, list, 0, list.length, angle);
	}
}
