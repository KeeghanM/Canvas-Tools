// Get HTML Canvas elements, and turn them into our own Canvas Objects
function GetCanvas(id) {
	return new Canvas(id);
}

function CreateCanvas(id,w,h,p) {
	return new Canvas(id,w,h,p);
}

// Canvas Object Construct
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

	// Black stroke and fill by default
	this.defaultCol = "#000"
	this.ctx.strokeStyle = this.defaultCol;
	this.ctx.fillStyle = this.defaultCol;

	// 1 px line width by default
	this.defaultLineWidth = 1;
	this.ctx.lineWidth = this.defaultLineWidth;
}

// Canvas Property Functions
Canvas.prototype.SetBackground = function(col) {
	this.ctx.fillStyle = col;
	this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);

	// Reset the default fill style for future drawing
	this.ctx.fillStyle = this.defaultCol;
}

Canvas.prototype.SetStroke = function(w,col){
	if(col){
		this.ctx.strokeStyle = col;
	}
	if(w){
		this.ctx.lineWidth = w;
	}
}
Canvas.prototype.ResetStroke = function(){
	this.ctx.strokeStyle = this.defaultCol;
	this.ctx.lineWidth = this.defaultLineWidth;
}

Canvas.prototype.SetFill = function(col){
	this.ctx.fillStyle = col;
}
Canvas.prototype.ResetFill = function(){
	this.ctx.fillStyle = this.defaultCol;
}