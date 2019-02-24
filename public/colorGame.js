var numSquare = 6;
var colors = [];
var pickedColor;

var h1 = document.getElementsByTagName("h1")[0];
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var square = document.getElementsByClassName("square");
var resetButton = document.querySelector("#reset");
var btns = document.querySelectorAll(".btn");

init();

function init() {
    setBtn();
    setSquare();
    reset();
}

function setBtn() {
    for (var i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function(){
            btns[0].classList.remove("selected");
            btns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
            reset();
        }
    )}
}

function setSquare() {
    for (var i = 0; i < square.length; i++){
        square[i].addEventListener("click", function(){
            if (this.style.backgroundColor === pickedColor){
                changeColor(pickedColor);
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset(){
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++){
        if (colors[i]){
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
        }
        else {
            square[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
}

resetButton.addEventListener("click", reset)

function changeColor(pickedColor){
    for (var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = pickedColor;
    }
    h1.style.backgroundColor = pickedColor;
}

function pickColor(){
    number = Math.floor(Math.random() * colors.length);
    return colors[number]
}

function generateRandomColors(num) {
    arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color
}