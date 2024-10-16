const ROWS = 200;
const COLUMNS = 100;

const mainContainerDiv = document.querySelector("#mainContainerDiv");

//creating rows
for (let i = 0; i < ROWS; i++) {
    const elementRow = document.createElement("div");
    elementRow.classList.add("divRow");
    mainContainerDiv.appendChild(elementRow);

    //creating columns
    for (let i = 0; i < COLUMNS; i++) {
        const elementColumn = document.createElement("div");
        elementColumn.classList.add("divColumn");
        elementRow.appendChild(elementColumn);
    }
  }


// drawing
let seedIndex = 0;
let colorPalateIndex = 0;
const colorsArray = [
    ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"],
    ["#c7522a", "#e5c185", "#f0daa5", "#fbf2c4", "#b8cdab", "#74a892", "#008585", "#004343"],
    ["#fdc921", "#fdd85d", "#feebaa", "#fffdf7", "#cceaf1", "#99d6ea", "#4d839a", "#003049"],
    ["#003f5c", "#58508d", "#8a508f", "#bc5090", "#de5a79", "#ff6361", "#ff8531", "#ffa600"],
    ["#21231b", "#414635", "#626950", "#828b6a", "#9ba384", "#b3bb9d", "#ccd3b6", "#e4eacf"]
];

const gridSquares = mainContainerDiv.querySelectorAll(".divRow div");
gridSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = colorsArray[colorPalateIndex % 5][seedIndex % 8];
        seedIndex++;
    });
});


//clean canvas
const cleanCanvasButton = document.querySelector(".cleanCanvasButton");
cleanCanvasButton.addEventListener("click", () => {
    gridSquares.forEach((div) => { 
        div.style.backgroundColor = "white";
    });
});

const toggleCanvasButton = document.querySelector(".toggleColorsButton");
toggleCanvasButton.addEventListener("click", () => {
    colorPalateIndex++;
});