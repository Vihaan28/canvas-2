var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var mouseevent = "empty";

var colour = "black";
var line_width = 5;

canvas.addEventListener("mousedown" , mymousedown);
function mymousedown(e){

mouseevent="mousedown";
}

canvas.addEventListener("mouseup" , mymouseup);
function mymouseup(e){

    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave" , mymouseleave);
function mymouseleave(e){

    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove" , mymousemove);
function mymousemove(e){
    mouseevent="mousemove";

 colour = document.getElementById("colour_input").value;
 line_width = document.getElementById("LW_input").value;
 radius = document.getElementById("radius_input").value;


current_x = e.clientX - canvas.offsetLeft;
current_y = e.clientY - canvas.offsetTop;

if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle =colour ;
    ctx.lineWidth = line_width;
    ctx.arc(current_x , current_y , radius , 0 ,  2*Math.PI);
    ctx.stroke();
}
}