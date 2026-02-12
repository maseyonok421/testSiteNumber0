const clickBtnEl = document.getElementById("clickBtn")
const scoreLblEl = document.getElementById("scoreLbl")

let score = 0

clickBtnEl.onclick = function() {
	score += 1
	scoreLblEl.innerText = "Score: " + score
}

