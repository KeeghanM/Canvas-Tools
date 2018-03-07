var canvas = GetCanvas("main-canvas");

// window.console.log(canvas);

// canvas2 = CreateCanvas("second",150,150,"area");
// window.console.log(canvas2);

////////////
// SETUPS //
////////////

// Change BG Color
	canvas.SetBackground("#AAA");

// // Initial Stroke Settings
// 	window.console.log("Start");
// 	window.console.log("Stroke Width: " + canvas.ctx.lineWidth);
// 	window.console.log("Stroke Color: " + canvas.ctx.strokeStyle);
// // Change stroke Settings
// 	canvas.SetStroke(5,"red"); // CHANGE HAPPENS HERE
// 	window.console.log("Change");
// 	window.console.log("Stroke Width: " + canvas.ctx.lineWidth);
// 	window.console.log("Stroke Color: " + canvas.ctx.strokeStyle);

// // Initial Fill Settings
// 	window.console.log("Start");
// 	window.console.log("Fill Color: " + canvas.ctx.fillStyle);
// // Change Fill Settings
// 	canvas.SetFill("blue"); // CHANGE HAPPENS HERE
// 	window.console.log("Change");
// 	window.console.log("Fill Color: " + canvas.ctx.fillStyle);

////////////
// SHAPES //
////////////

// Draw a simple line, from top-left to bottom-right
// 	canvas.Line(0,0,300,150);

// // Draw a circle with ONLY fill
// 	canvas.NoStroke();
// 	canvas.Circle(50,50,20);

// // Draw a cirlce with ONLY stroke
// 	canvas.NoFill();
// 	canvas.Circle(90,50,20);

// // Draw a circle with BOTH stroke AND Fill
// 	canvas.Circle(130,50,20);

// // Draw a circle with new colors
// 	canvas.SetFill("green");
// 	canvas.SetStroke(5,"orange");
// 	canvas.Circle(170,50,20);

// // Draw a rectangle
// 	canvas.Rect(50,100,100,50);

///////////////
// ANIMATION //
///////////////

// Change to false to have this run only once.
	canvas.Loop(true);

// Set the desired framerate
	canvas.FrameRate(25);

// This function will run on a loop forever, or untill you call canvas.Loop(false);
	let x=0;
	let mr=10;
	function Update() {
		canvas.Circle(x,50,20);

		if(x > 300 || x < 0){
			mr = mr*-1;
		}
		x+=mr;
	}	

// Let the canvas know it can begin using it's Update function
canvas.Begin();