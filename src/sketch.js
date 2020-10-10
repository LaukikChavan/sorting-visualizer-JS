let arr = []
for (let i = 0; i < 15; i++) {
	if (Math.random() > 0.5)
		arr.push(Math.round(Math.random() * 100))
	else
		arr.push(-Math.round(Math.random() * 100))
}
// arr.sort((a ,b) => a - b)
// arr.reverse()
let poppins;

function preload() {
	poppins = loadFont('../fonts/Inconsolata-Bold.ttf');
}

const spacing = 0.14
let x = 0;

function setup() {
	createCanvas(windowWidth / 1.5, windowHeight, WEBGL);
	textFont(poppins);
	textAlign(CENTER, CENTER);
	for (let i = 0; i <= arr.length; i++) {
		x += (spacing / 2)
	}
}

function windowResized() {
	resizeCanvas(windowWidth / 1.5, windowHeight)
}

function draw() {
	const boxWidth = width * spacing
	textSize(boxWidth * 0.33);
	ortho(-width, width, -height, height, -10000, 10000)
	background(255);
	angleMode(DEGREES);
	rotateX(60);
	rotateZ(30);

	translate(-width * x, 0, 0)
	arr.forEach((e, i) => {
		const m = map(arr[i], 0, max(arr), 0, 0.5)
		translate(boxWidth, 0, 0)
		push();
		translate(0, 0, (height * m) / 2)
		push();
		translate(0, (boxWidth) / 1.5, 0)
		rotateX(270);
		fill(0)
		text(e, 0, 0)
		pop();
		stroke(0);
		strokeWeight(3);
		fill('#eee')
		box(boxWidth, boxWidth, height * m);
		pop();
	})
}