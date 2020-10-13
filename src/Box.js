class Box {
	constructor(width, height, depth, boxColor, textColor, value) {
		this.width = width;
		this.height = height;
		this.depth = depth;
		this.boxColor = boxColor;
		this.textColor = textColor;
		this.value = value;
	}

	show() {
		push();
		translate(0, 0, this.depth / 2)
		push();
		translate(0, this.width / 1.5, 0)
		rotateX(270);
		fill(this.textColor)
		text(this.value, 0, 0)
		pop();
		stroke(0);
		strokeWeight(3);
		fill(this.boxColor)
		box(this.width, this.height, this.depth);
		pop();
	}
}