const canvas = document.querySelector("#drawspace");
const canvasContext = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = "250";
canvasContext.strokeStyle = "BADA55";
canvasContext.lineJoin = "round";
canvasContext.lineCap = "round";
canvasContext.lineWidth = 50; //change to user selection

let isDrawing =  false; //check if mouse is pressed down
let lastX = 0;
let lastY = 0;
let hue = var(--pickedColour); //change to user selection
document.documentElement.style.setProperty("--pickedColour", colour);

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
	//hue++;

	//check if user selected a colour, 

  
  
} 


canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
