const container = document.querySelector(".grid-container");
const GRID_SIZE = 16;
const totalCells = GRID_SIZE * GRID_SIZE;

function createGrid() {
    for (let i = 0; i < totalCells; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
}

createGrid();
