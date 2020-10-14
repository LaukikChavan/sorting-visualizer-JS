let values = []
for (let i = 0; i < globals.valueLength; i++) {
  if (Math.random() >= 0.5)
    values.push(Math.round(Math.random() * 200))
  else
    values.push(-Math.round(Math.random() * 200))
}

let inconsolata;

function preload() {
  inconsolata = loadFont('../fonts/Inconsolata-Bold.ttf');
}

const spacing = 0.14
let x = 0;
let boxes = [];
let boxWidth;

function setup() {
  const c = createCanvas(windowWidth / 1.5, windowHeight, WEBGL);
  c.parent('sketch-holder')
  textFont(inconsolata);
  textAlign(CENTER, CENTER);
  for (let i = 0; i <= values.length; i++) {
    x += (spacing / 2)
  }
}

function windowResized() {
  resizeCanvas(windowWidth / 1.5, windowHeight)
}


let j = 0;
let i = 0

function draw() {
  frameRate(globals.frame_rate)
  const n = max(abs(min(values)), max(values))
  boxWidth = width * spacing
  textSize(boxWidth * 0.33);
  boxes = []

  ortho(-width, width, -height, height, -10000, 10000)
  background(255);
  angleMode(DEGREES);
  rotateX(60);
  rotateZ(30);
  translate(-width * x, 0, 0)

  values.forEach((e) => {
    const m = map(e, 0, n, 0, 0.7)
    const box = new Box(boxWidth, boxWidth, height * m, '#c5e9ff', '#000', e);
    boxes.push(box)
  })

  if(globals.start) {
    const a = values[j];
    const b = values[j + 1]

    boxes[j].boxColor = "#98ff99"
    boxes[j + 1].boxColor = "#deffe0"

    if (a > b) {
      swap(values, j, j + 1)
    }

    if (i < values.length) {
      j = j + 1;
      if (j >= values.length - i - 1) {
        // boxes[values.length - i - 1].boxColor = "#e6c2ff"
        j = 0
        i = i + 1
      }
    } else {
      boxes.forEach(box => {
        box.boxColor = "#f0dcff";
      })
      globals.start = false
      startButton.setAttribute("class", "start")
      startButton.innerHTML = "Start Bubble Sort"
      randomButton.removeAttribute("disabled")
      increaseButton.removeAttribute("disabled")
      decreaseButton.removeAttribute("disabled")
    }
  }

  boxes.forEach(box => {
    translate(boxWidth, 0, 0);
    box.show();
  })
}

// function bubbleSort(arr, n, asc) {
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (asc) {
//         if (arr[j] > arr[j + 1]) {
//           swap(arr, j, j + 1)
//         }
//       } else {
//         if (arr[j + 1] > arr[j]) {
//           swap(arr, j, j + 1)
//         }
//       }
//     }
//   }
// }

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}