var colors = [
  "rgb(255, 9, 0)",
  "rgb(25, 90, 0)",
  "rgb(5, 109, 200)",
  "rgb(200, 159, 250)",
  "rgb(255, 9, 255)",
  "rgb(255, 249, 0)"
];

var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message")
for(var i = 0; i < squares.length; i++) {
  //add initail color to squares
    squares[i].style.background = colors[i];
  //add event listener to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (pickedColor === clickedColor) {
      messageDisplay.textContent = "Correct";
      changeColor(pickedColor);
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