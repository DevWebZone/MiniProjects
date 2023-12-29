var square = document.getElementsByTagName("div");
var squareTop = 50;
square[0].style.top = squareTop + "%";
var squareLeft = 50;
square[0].style.left = squareLeft + "%";
square[0].addEventListener('mouseover',
function(){
    var top = Math.floor(Math.random()*90);
    var left = Math.floor(Math.random()*95);
    square[0].style.top = top + "%";
    square[0].style.left = left + "%";
})