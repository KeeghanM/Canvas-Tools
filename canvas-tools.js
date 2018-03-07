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

	// Bools to determine HOW we will draw our shapes
	this.fill = true;
	this.stroke = true;

	// Default framrate of 60
	this.frameRate = 60;
	this.lastFrameTime = 0;
	this.loop = true;

	// Default background of white, need this so we can re-do it in each Update
	this._bgColor = "#fff"
}

// Canvas Property Functions
Canvas.prototype.Loop = function(b){
	this.loop = b;
}

Canvas.prototype.FrameRate = function(fps){
	this.frameRate = fps;
}

Canvas.prototype.SetBackground = function(col) {
	this._bgColor=(col);
	this.ctx.fillStyle = this._bgColor;
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

Canvas.prototype.NoStroke = function(){
	this.stroke = false;
}

Canvas.prototype.NoFill = function(){
	this.fill = false;
}

Canvas.prototype.resetNoFillAndStroke = function(){
	this.fill = true;
	this.stroke = true;
}


// Simple Drawing Tools
Canvas.prototype.Line = function(sx,sy,ex,ey){
	this.ctx.moveTo(sx,sy);
	this.ctx.lineTo(ex,ey);
	this.ctx.stroke();
}

Canvas.prototype.Circle = function(x,y,r){
	this.ctx.beginPath();
	this.ctx.arc(x,y,r,0,2*Math.PI);
	if(this.fill){
		this.ctx.fill();
	}
	if(this.stroke){
		this.ctx.stroke();
	}
	// No Fill and No Stroke are one off only
	// So after each draw, we reset
	this.resetNoFillAndStroke();
}

Canvas.prototype.Rect = function(x,y,w,h){
	this.ctx.rect(x,y,w,h);
	if(this.fill){
		this.ctx.fill();
	}
	if(this.stroke){
		this.ctx.stroke();
	}
	// No Fill and No Stroke are one off only
	// So after each draw, we reset
	this.resetNoFillAndStroke();
}


// Animation
Canvas.prototype.Begin = function(){
	this._update();
}
Canvas.prototype._update = function(){
	// This update function calls any user defined Update function
	// and should run at least once when the canvas is first created.

	let _this = this;

	let now = window.performance.now();
	let timeSinceLast = now - _this.lastFrameTime;
	let timeBetweenFrames = 1000 / _this.frameRate;

	if(_this.loop == true || timeSinceLast >= timeBetweenFrames){ // 
		// Call the users Update function
		if (timeSinceLast >= timeBetweenFrames) { 
			if (typeof Update === "function") {
				_this.SetBackground(_this._bgColor);
				Update();
			}
			_this.lastFrameTime = now;
		}

		// loop
		window.requestAnimationFrame(function() { _this._update(); });
	}
}