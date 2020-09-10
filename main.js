function createGrid() {
  let gridDisplay = document.querySelector("#grid");
  let gridDisplayStyle = document.querySelector("#grid").style;
  gridDisplayStyle.setProperty("display", "grid");
  gridDisplayStyle.setProperty("grid-template-columns", "repeat(16, 1fr)");
  gridDisplayStyle.setProperty("grid-template-rows", "repeat(16, 1fr)");
  // gridDisplayStyle.setProperty("column-gap", "5px");
  // gridDisplayStyle.setProperty("row-gap", "5px");

  // 256 refers to the square of 16 cells
  for (let i = 0; i < 256; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("cell");
    // gridDiv.textContent = "a";
    gridDisplay.appendChild(gridDiv);
  }
}

function turnCellBlack(cell) {
  cell.style.setProperty("background-color", "black");
}

function resetCells() {
  const cells = document.querySelectorAll(".cell");
  // cells.removeAttribute("style");
  cells.forEach(cell => {
    cell.removeAttribute("style");
  })
}

createGrid();

const gridCells = document.querySelectorAll(".cell");
console.log(gridCells);
gridCells.forEach(cell => {
  cell.addEventListener('mouseover', () => {
    turnCellBlack(cell);
  });
});

const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click", () => {
  resetCells();
});
