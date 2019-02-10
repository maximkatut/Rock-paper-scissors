//varim dva paragrafa dlya zameni na kartinku
var p1 = document.querySelector(".p1Img p");
var p2 = document.querySelector(".p2Img p");
//vstavlyaem kartinku v VS, varim dva diva
var p1Img = document.querySelector(".p1Img");
var p2Img = document.querySelector(".p2Img");
//varim score igrokov
var p1Score = 0;
var p2Score = 0;
var p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
var p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");

var resFight = document.querySelector(".title");
var h1 = document.querySelector("h1");

function playR() {
	p1Img.classList.remove("paper");
	p1Img.classList.remove("scissors");
	p1Img.classList.add("rock");
	var x = Math.floor((Math.random() * 3) + 1);
	someFunc(x);
	if (x === 1) {
		resFight.textContent = "Draw";
	} else if (x === 2){
		resFight.textContent = "Wasted!";
		p2Score++;
		p2ScoreDisplay.textContent = p2Score;
	} else {
		resFight.textContent = "You win!";
		p1Score++;
		p1ScoreDisplay.textContent = p1Score;
	}
}

function playP() {
	p1Img.classList.remove("rock");
	p1Img.classList.remove("scissors");
	p1Img.classList.add("paper");
	var x = Math.floor((Math.random() * 3) + 1);
	someFunc(x);
	if (x === 1) {
		resFight.textContent = "You win!";
		p1Score++;
		p1ScoreDisplay.textContent = p1Score;
	} else if (x === 2){
		resFight.textContent = "Draw";
	} else {
		resFight.textContent = "You lose!";
		p2Score++;
		p2ScoreDisplay.textContent = p2Score;
	}
}

function playS() {
	p1Img.classList.remove("paper");
	p1Img.classList.remove("rock");
	p1Img.classList.add("scissors");
	var x = Math.floor((Math.random() * 3) + 1);
	someFunc(x);
	if (x === 1) {
		resFight.textContent = "Wasted!";
		p2Score++;
		p2ScoreDisplay.textContent = p2Score;
	} else if (x === 2){
		resFight.textContent = "You win!";
		p1Score++;
		p1ScoreDisplay.textContent = p1Score;
	} else {
		resFight.textContent = "Draw";
	}
}

function someFunc(x) {
	p1.classList.add("checked");
	p2.classList.add("checked");
	if (x === 1) {
		p2Img.classList.add("rock");
		p2Img.classList.remove("paper");
		p2Img.classList.remove("scissors");
	} else if (x === 2) {
		p2Img.classList.add("paper");
		p2Img.classList.remove("rock");
		p2Img.classList.remove("scissors");
	} else {
		p2Img.classList.add("scissors");
		p2Img.classList.remove("paper");
		p2Img.classList.remove("rock");
	}
	resFight.style.color = "#FC371D";
	h1.style.marginBottom = "-6px";
}