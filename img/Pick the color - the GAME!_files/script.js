var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#display-color");
var message = document.querySelector("#display-result");

colorDisplay.textContent = pickedColor;


for (var i=0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			message.textContent = "Correct!";
			changeColors(pickedColor);
		} else {
			this.style.backgroundColor = "transparent";
			message.textContent = "Try again!";
		}
	});
}

function changeColors(color) {
	for (var i=0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		document.querySelector("h1").style.backgroundColor = color;
	}
}

function pickColor() {
	var x = Math.floor((Math.random() * 6) + 1);
	return colors[x-1];
}