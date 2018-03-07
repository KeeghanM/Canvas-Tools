var canvas = GetCanvas('main-canvas')

// Setup Canvas Details
canvas.SetBackground('#AAA')
canvas.Loop(true)
canvas.FrameRate(25)

// Some variables for what we will draw
let x = 50
let y = 50
let r = 20
let mrX = 10
let mrY = 10

// This function will run on a loop forever, or untill you call canvas.Loop(false);
function Update () {
  canvas.SetFill('pink')
  canvas.NoStroke()
  canvas.Circle(x, y, r)

  canvas.SetStroke('red', 3)
  canvas.Line(150, 0, x, y)

  if (x > 300 - r || x < r) {
    mrX = mrX * -1
  }
  x += mrX

  if (y > 150 - r || y < r + 5) {
    mrY = mrY * -1
  }
  y += mrY
}

// Let the canvas know it can begin using it's Update function
canvas.Begin()
