class Trail{
	constructor(x = 0, y = 0, length = 0, chlist = [], index = 0){
		this.pos = createVector(x, y);
		this.length = length;
		this.chlist = chlist;
		this.index = index;
		this.dead = false;
	}

	draw(){
		text(this.chlist[this.index], this.pos.x, this.pos.y);
		if(this.length > 1){
			new Trail(this.pos.x, this.pos.y - spacing, this.length - 1, this.chlist, this.index + 1).draw();
		}
	}

	update(){
		this.pos.y += spacing;
		this.chlist.unshift(Trail.randomCh());
		if(this.pos.y - this.length * spacing > height){
			this.dead = true;
		}
	}

	static random(){
		let x = int(random(0, (width - 1) / spacing)) * spacing;
		let y = int(random(1, height / spacing)) * spacing;
		let list = Trail.randomChlist();
		return new Trail(x, y, list.length, list);
	}

	static randomChlist(){
		let length = int(random(10,20));
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
