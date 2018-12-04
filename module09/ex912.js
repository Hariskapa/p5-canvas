function setup() {
	createCanvas(windowWidth, windowHeight);
	// set background color in the setup so sketches will leave traces
	background('#D66761');
  }
  function draw() {
	noStroke();
	fill(241, 222, 152, 30);
	// ellipse will change according to the mouseX and mouseY position
	ellipse(mouseX, mouseY, 30, 30);
  }
  