class Trail{
	constructor(x = 0, y = 0, length = 0, chlist = [], index = 0, topLength = 0){
		this.pos = createVector(x, y);
		this.length = length;
		this.chlist = chlist;
		this.index = index;
		this.topLength = topLength;
		this.dead = false;
	}

	draw(){
		if(this.length == this.topLength){
			fill(255);
		}else{
			let c = color(0, 255, 0);
			c.setAlpha(this.length / this.topLength * 155 + 100);
			fill(c);
		}
		text(this.chlist[this.index], this.pos.x, this.pos.y);
		if(this.length > 1){
			new Trail(this.pos.x, this.pos.y - spacing, this.length - 1, this.chlist, this.index + 1, this.topLength).draw();
		}
	}

	update(){
		this.pos.y += spacing;
		this.chlist.unshift(Trail.randomCh());
		if(this.pos.y - this.length * spacing > height){
			this.dead = true;
		}
	}

	static random(x){
		let list = Trail.randomChlist();
		return new Trail(x, 0, list.length, list, 0, list.length);
	}

	static randomChlist(){
		let length = int(random(10,30));
		let list = [];
		for(let i = 0; i < length; i++){
			list.push(Trail.randomCh());
		}
		return list;
	}

	static randomCh(){
		let options = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
		return random(options);
	}
}
