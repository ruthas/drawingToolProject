const canvas = document.querySelector("#drawspace");
const canvasContext = canvas.getContext("2d");
let colour = document.getElementsByName("colour");

console.log(colour);

canvas.width = window.innerWidth;
canvas.height = "550";
canvasContext.strokeStyle = "red"; //stroke colour
canvasContext.lineJoin = "round"; //end of the line
canvasContext.lineCap = "round"; 
canvasContext.lineWidth = 25; //change to user selection

let isDrawing =  false; 
let lastX = 0;
let lastY = 0;
let hue = 0; //change to user selection
let direction = true;


function draw(e){
	if(!isDrawing){
		return;
	}
	console.log(e);
	canvasContext.strokeStyle = `hsl(${hue}, 100%, 50%)`; //SET WITH USER SELECTED COLOUR
	canvasContext.beginPath();
	canvasContext.moveTo(lastX, lastY);
	canvasContext.lineTo(e.offsetX, e.offsetY);
	canvasContext.stroke();
	lastX = e.offsetX;
	lastY = e.offsetY;
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;

	if(hue >= 360){
		hue = 0;
	}
	if(canvasContext.lineWidth >= 100 || canvasContext.lineWidth <= 1){
		direction = !direction;
	} 
    
	if(direction){
		canvasContext.lineWidth++; 
	} else {
		canvasContext.lineWidth--;
	}
  
  
} 

canvas.addEventListener("input", () => {
	canvasContext.strokeStyle = colour.value;
}, false);
canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
