const container = document.querySelector(".grid-container");
const gridSize = 16;
const totalCells = gridSize * gridSize;

function createGrid() {
    for (let i = 0; i < totalCells; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
}

createGrid();
