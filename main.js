function createGrid(num = 16) {
  let gridDisplay = document.querySelector("#grid");
  let gridDisplayStyle = document.querySelector("#grid").style;
  gridDisplayStyle.setProperty("display", "grid");
  gridDisplayStyle.setProperty("grid-template-columns", `repeat(${num}, 1fr)`);
  gridDisplayStyle.setProperty("grid-template-rows", `repeat(${num}, 1fr)`);
  // gridDisplayStyle.setProperty("column-gap", "5px");
  // gridDisplayStyle.setProperty("row-gap", "5px");

  // Math.pow(num, 2) refers to the square of num cells
  // so 16x16 will give 256 cells
  for (let i = 0; i < Math.pow(num, 2); i++) {
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("cell");
    // gridDiv.textContent = "a";
    gridDisplay.appendChild(gridDiv);
  }
  const gridCells = document.querySelectorAll(".cell");
  console.log(gridCells);
  gridCells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      turnCellBlack(cell);
    });
  });
}

function turnCellBlack(cell) {
  cell.style.setProperty("background-color", "black");
}

function resetCells() {
  // const cells = document.querySelectorAll(".cell");
  // // cells.removeAttribute("style");
  // cells.forEach(cell => {
  //   cell.removeAttribute("style");
  // });
  let cells = document.querySelectorAll(".cell");
  let gridDisplay = document.querySelector("#grid");
  cells.forEach(cell => {
    gridDisplay.removeChild(cell);
  });
}

function askForNewGrid() {
  let reply = parseInt(prompt("How many squares per side?"));
  console.log(reply);
  createGrid(reply);
}

createGrid();
// Below this line was the original placement of the gridCells event listener;


const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click", () => {
  resetCells();
  askForNewGrid();
});
