//This is the game 
//50px * 8 = 400px
//give the input with click, row & column, (x,y)
//alert("!");
var light = "#E9E4C7";
var gameBoard = document.getElementById("gameboard");
var brush = gameBoard.getContext("2d");
//gameBoard.fillStyle = "#E9E4C7";
gameBoard.fillStyle = "#000000";
var cellWidth = 50;
var cellHeight = 50;
$('document').ready(function () {
    draw();
});

var drawBoard = function () {
    brush.beginPath();
    brush.rect(0, 0, 50, 50);
    brush.fillStyle = light;
    brush.fill();
    brush.closePath();
};

var draw = function () {
    drawBoard();
};