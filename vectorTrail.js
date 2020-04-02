class VectorTrail extends Trail{
	constructor(x = 0, y = 0, length = 0, chlist = [], index = 0, topLength = 0, angle = 0, steps = 0){
		super(x, y, length, chlist, index, topLength)
		this.dead = false;
		this.angle = angle
		let vx = cos(angle);
		let vy = sin(angle);
		this.vel = createVector(vx, vy);
		this.vel.setMag(spacing);
		this.steps = steps
		this.verticle = false;
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
		if(this.length > 1 && this.index < this.steps){
			this.dead = new VectorTrail(
				this.pos.x - this.vel.x, 
				this.pos.y - this.vel.y,
				this.length - 1,
				this.chlist,
				this.index + 1,
				this.topLength,
				this.angle,
				this.steps
			).draw();
			return this.dead;
		}
		if(this.pos.x < 0 || this.pos.y < 0 || this.pos.x > width || this.pos.y > height){
			return true;
		}
	}

	update(){
		this.pos.add(this.vel);
		this.steps += 1;
	}

	static burst(angle, x, y){
		let list = VectorTrail.randomChlist();
		return new VectorTrail(x, y, list.length, list, 0, list.length, angle);
	}
}
