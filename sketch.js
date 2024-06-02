// draw a happy face

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	// face
	fill(255, 255, 0);
	ellipse(200, 200, 200, 200);
	// eyes
	fill(0);
	ellipse(150, 150, 20, 20);
	ellipse(250, 150, 20, 20);
	// mouth
	fill(255, 0, 0);
	arc(200, 200, 100, 100, 0, PI);
}
