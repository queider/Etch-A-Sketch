const mainContainerDiv = document.querySelector("#mainDiv");
const gridSquares = mainContainerDiv.querySelectorAll(".rowdiv div");

gridSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
});
