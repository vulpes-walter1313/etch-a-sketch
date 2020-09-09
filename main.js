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
    gridDiv.textContent = "Div";
    gridDisplay.appendChild(gridDiv);
  }
}

createGrid();
