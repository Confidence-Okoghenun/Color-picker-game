var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

resetButton.addEventListener("click", function() {
  resetButton.textContent = "New Color";
  h1.style.background = "steelblue";
  colors = generateRandomColors(numSquares);
  messageDisplay.textContent = "";
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  };
});

easyButton.addEventListener("click", function() {
  for(var i = 3; i < squares.length; i++) {
    squares[i].style.display = "none";
  };
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  };
});

hardButton.addEventListener("click", function() {
  for (var i = 3; i < squares.length; i++) {
    squares[i].style.display = "block";
  };
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  };
});

for(var i = 0; i < squares.length; i++) {
  //add initail color to squares
    squares[i].style.background = colors[i];
  //add event listener to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (pickedColor === clickedColor) {
      messageDisplay.textContent = "Correct";
      changeColor(pickedColor);
      h1.style.background = pickedColor;
      resetButton.textContent = "Play Again?"
     } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  });
}

function changeColor(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}