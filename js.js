const ROWS = 200;
const COLUMNS = 100;

const mainContainerDiv = document.querySelector("#mainContainerDiv");

//creating rows
for (let i = 0; i < ROWS; i++) {
    const elementRow = document.createElement("div");
    elementRow.classList.add("divRow");
    mainContainerDiv.appendChild(elementRow);

    for (let i = 0; i < COLUMNS; i++) {
        const elementColumn = document.createElement("div");
        elementColumn.classList.add("divColumn");
        elementRow.appendChild(elementColumn);
    }
  }

let seedIndex = 0;
const colorsArray = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];

const gridSquares = mainContainerDiv.querySelectorAll(".divRow div");
gridSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = colorsArray[colorIndex = seedIndex % 8];
        seedIndex++;
    });
});

