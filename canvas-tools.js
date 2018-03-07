function Canvas(id,w,h,p){
	if(arguments.length > 1){
		let c = document.createElement("canvas");
		c.id = id;
		c.width = w;
		c.height = h;

		let po = document.getElementById(p);
		if(po){
			po.append(c);
		} else {
			document.body.appendChild(c);
		}
	}
	this.canvas = document.getElementById(id);
	this.ctx    = this.canvas.getContext("2d");
}

function GetCanvas(id) {
	return new Canvas(id);
}

function CreateCanvas(id,w,h,p) {
	return new Canvas(id,w,h,p);
}