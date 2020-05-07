const addDrawing = document.querySelector(".add-drawing");
const clearDrawing = document.querySelector(".clear-drawing");
const drawingList = document.querySelector(".drawning-list");
const drawings = [];

const storageLabel = "drawingLabels";

//const drawings = JSON.parse(localStorage.getItem(""));


function saveDrawings(e){
	e.preventDefault(); 
	const textValue = this.querySelector("[name=drawingName");
    
	const drawing = {
		text: textValue
	};
    
	drawings.push(drawing);
	populateDrawingList(drawings, drawingList);
	this.reset();

	console.log();
    
}

function populateDrawingList(listDrawings = [], drawingList){
	drawingList.innerHTML = listDrawings.map((drawnItem, i) => {
		return `
            <li>
                <label for="">${drawnItem.text}</label>
            </li>
        `;
	}).join("");
}

addDrawing.addEventListener("submit", saveDrawings);
