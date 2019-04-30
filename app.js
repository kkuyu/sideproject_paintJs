const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementById("jsColors").getElementsByTagName("button");
const range = document.getElementById("jsRange");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting(){
	painting = true;
}

function stopPainting() {
	painting = false;
}

function onMouseMove(event) {
	const posX = event.offsetX;
	const posY = event.offsetY;
	if(!painting){
		ctx.beginPath();
		ctx.moveTo(posX, posY);
	}else{
		ctx.lineTo(posX, posY);
		ctx.stroke();
	}
}

function handleRangeChange(){
	const size = event.target.value;
	ctx.lineWidth = size;
}

function handleColorClick(event){
	const color = event.target.style.backgroundColor;
	ctx.strokeStyle = color;
}

if (canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range){
	range.addEventListener("input", handleRangeChange);
}