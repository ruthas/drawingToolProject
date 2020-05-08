const canvas = document.querySelector("#drawspace");
const canvasContext = canvas.getContext("2d");
const clearDrawing = document.querySelector(".clear-drawing");
const addDrawing = document.querySelector(".add-drawing");
const drawingList = document.querySelector(".drawning-list");
const drawingName = document.querySelector("[name=drawingName").value;
//const drawings = JSON.parse(localStorage.getItem("drawings")) || [];
const storageLabel = "drawingLabel";
let canvasDrawingPoints = JSON.parse(localStorage.getItem(drawingName)) || [];

let colourInput = document.getElementById("colour");
let lineThickness = document.getElementById("lineThickness");

//const drawings = JSON.parse(localStorage.getItem(""));

function saveDrawings(drawingName, canvasDrawingPoints){
	//e.preventDefault(); 
	
    
	const drawing = {
		text: canvasDrawingPoints,
	};
    
	drawings.push(drawing);
	PopulateDrawingList(drawings, drawingList);
	localStorage.setItem(drawingName, JSON.stringify(drawings));
	this.reset();
}
function MapDrawingstoHTML(drawnItem){
	return `
            <li>
                <label for="">${drawnItem.text}</label>
            </li>
        `;
}

function PopulateDrawingList(listDrawings = [], drawingList){
	drawingList.innerHTML = listDrawings.map(MapDrawingstoHTML).join("");
}


canvas.width = window.innerWidth;
canvas.height = "550";
canvasContext.lineJoin = "round"; //end of the line
canvasContext.lineCap = "round"; 

let isDrawing =  false; 
let lastX = 0;
let lastY = 0;
let mouseX, mouseY;



function draw(e){
	if(!isDrawing){
		return;
	}
	//console.log(e);
	canvasContext.lineWidth = lineThickness.value;
	canvasContext.strokeStyle = colourInput.value; 
	canvasContext.beginPath();
	canvasContext.moveTo(lastX, lastY);
	canvasContext.lineTo(e.offsetX, e.offsetY);
	canvasContext.stroke();
	lastX = e.offsetX;
	lastY = e.offsetY;
	[lastX, lastY] = [e.offsetX, e.offsetY];
	mouseX = lastX;
	mouseY = lastY;
	canvasDrawingPoints.push({
		x: mouseX,
		y: mouseY,
		line: canvasContext.strokeStyle,
		colour: canvasContext.lineWidth,
	});
}

function clearCanvas(){
	localStorage.setItem("drawings", JSON.stringify([]));
}

canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
	
});

clearDrawing.addEventListener("submit", clearCanvas);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

addDrawing.addEventListener("submit", saveDrawings);

PopulateDrawingList(drawings, drawingList);
//PopulateDrawingList(drawingList, getStoredDrawingAt(storageLabel));