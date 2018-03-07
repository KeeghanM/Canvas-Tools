var canvas = GetCanvas('main-canvas')

// Setup Canvas Details
canvas.SetBackground('#AAA')
canvas.Loop(true)
canvas.FrameRate(25)
canvas.SetWidth(500)
canvas.SetHeight(500)

// Some variables for what we will draw
let x = 50
let y = 50
let r = 20
let mrX = 10
let mrY = 20

// This function will run on a loop forever, or untill you call canvas.Loop(false);
function Update () {
  canvas.SetFill('pink')
  canvas.NoStroke()
  canvas.Circle(x, y, r)

  canvas.SetStroke('red', 3)
  canvas.Line(canvas.width / 2, 0, x, y)

  if (x > canvas.width - r || x < r) {
    mrX = mrX * -1
  }
  x += mrX

  if (y > canvas.height - r || y < r + 5) {
    mrY = mrY * -1
  }
  y += mrY
}

// Let the canvas know it can begin using it's Update function
canvas.Begin()
