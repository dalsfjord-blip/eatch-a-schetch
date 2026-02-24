const container = document.querySelector(".grid-container");
const newGridBtn = document.getElementById('new-grid-btn');

// Create an initial 16x16 grid on page load
createGrid(16);

function createGrid(squaresPerSide) {
   container.innerHTML = "";

   
    const sizePercentage = 100 / squaresPerSide;
    const totalSquares = squaresPerSide * squaresPerSide;
    
    for (let i = 0; i < totalSquares; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        
        
        gridItem.style.width = `${sizePercentage}%`;
        gridItem.style.height = `${sizePercentage}%`;

        gridItem.addEventListener("mouseenter", () => {
            gridItem.style.backgroundColor = getRandomColor();
        });

        container.appendChild(gridItem);
    }
}
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
// 4. Button Logic
newGridBtn.addEventListener("click", () => {
    let userInput = prompt("How many squares per side do you want? (Max 100)");
    let size = parseInt(userInput);

    
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Error: Please enter a number between 1 and 100.");
    } else {
        createGrid(size);
    }
});