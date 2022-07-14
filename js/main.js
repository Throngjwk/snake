var score = 0;
let version = "1.0.0"

var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;

document.getElementById("left").onclick = () => {
    x2 += 5
}

document.getElementById("right").onclick = () => {
    x2 -= 5
}

document.getElementById("up").onclick = () => {
    y2 += 5
}

document.getElementById("down").onclick = () => {
    y2 -= 5
}

function update() {
    document.getElementById("score").style.top = y1 + "px"
    document.getElementById("snake").style.top = y2 + "px"
    document.getElementById("score").style.left = x1 + "px"
    document.getElementById("snake").style.left = x2 + "px"
}

setInterval(update, 200)