canvas = GetCanvas("main-canvas");
// window.console.log(canvas);

// canvas2 = CreateCanvas("second",150,150,"area");
// window.console.log(canvas2);

// Change BG Color
	canvas.SetBackground("#AAA");

// // Initial Stroke Settings
// 	window.console.log("Start");
// 	window.console.log("Stroke Width: " + canvas.ctx.lineWidth);
// 	window.console.log("Stroke Color: " + canvas.ctx.strokeStyle);
// // Change stroke Settings
// 	window.console.log("Change");
	canvas.SetStroke(5,"red");
// 	window.console.log("Stroke Width: " + canvas.ctx.lineWidth);
// 	window.console.log("Stroke Color: " + canvas.ctx.strokeStyle);

// // Initial Fill Settings
// 	window.console.log("Start");
// 	window.console.log("Fill Color: " + canvas.ctx.fillStyle);
// // Change Fill Settings
// 	window.console.log("Change");
	canvas.SetFill("blue");
// 	window.console.log("Fill Color: " + canvas.ctx.fillStyle);

canvas.Line(5,10,200,100);

canvas.Circle(50,50,8);