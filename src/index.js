const countElement = document.querySelector(".boxes")
const startButton = document.createElement("button")
const controls = document.getElementById("controls")
const randomButton = document.querySelector('.random')
const increaseButton = document.querySelector('.increase')
const decreaseButton = document.querySelector('.decrease')
const speedElement = document.querySelector(".frames")

startButton.setAttribute("class", "start")
startButton.innerHTML = "Start Bubble Sort"
countElement.innerHTML = globals.valueLength
speedElement.innerHTML = globals.frame_rate
controls.append(startButton)

startButton.addEventListener('click', (e) => {
	e.preventDefault()
	console.log(values)
	if(globals.start === false) {
		i = 0
		j = 0
		globals.start = true
		randomButton.disabled = true
		increaseButton.disabled = true
		decreaseButton.disabled = true
		startButton.innerHTML = "Stop"
		startButton.setAttribute("class", "stop")
	} else {
		globals.start = false
		startButton.setAttribute("class", "start")
		startButton.innerHTML = "Start Bubble Sort"
		randomButton.removeAttribute("disabled")
		increaseButton.removeAttribute("disabled")
		decreaseButton.removeAttribute("disabled")
	}
})

function randomize() {
	values = []
	for (let i = 0; i < globals.valueLength; i++) {
		if (Math.random() >= 0.5)
			values.push(Math.round(Math.random() * 200))
		else
			values.push(-Math.round(Math.random() * 200))
	}

	x = 0;
	for (let i = 0; i <= values.length; i++) {
		x += (spacing / 2)
	}
}

function increaseSpeed() {
	if (globals.frame_rate < 10) {
		globals.frame_rate++
		speedElement.innerHTML = globals.frame_rate
	}
}

function decreaseSpeed() {
	if (globals.frame_rate > 1) {
		globals.frame_rate--
		speedElement.innerHTML = globals.frame_rate
	}
}

function decreaseValueCount() {
	if (values.length > 2) {
		globals.valueLength--
		values.pop()
		x = 0;
		countElement.innerHTML = globals.valueLength
		for (let i = 0; i <= values.length; i++) {
			x += (spacing / 2)
		}
	}
}

function increaseValueCount() {
	if (values.length < 15) {
		globals.valueLength++
		if (Math.random() >= 0.5)
			values.push(Math.round(Math.random() * 200))
		else
			values.push(-Math.round(Math.random() * 200))
		x = 0;
		countElement.innerHTML = globals.valueLength
		for (let i = 0; i <= values.length; i++) {
			x += (spacing / 2)
		}
	}
}