const ROWS = 200;
const COLUMNS = 200;

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


const gridSquares = mainContainerDiv.querySelectorAll(".divRow div");
gridSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
});
