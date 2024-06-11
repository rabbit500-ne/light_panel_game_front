document.addEventListener('DOMContentLoaded', (event) => {
    const gameContainer = document.getElementById('game-container');

    // Create a simple grid of lights
    const gridSize = 3; // 3x3 grid for example
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const light = document.createElement('div');
            light.className = 'light';
            light.addEventListener('click', () => {
                light.style.backgroundColor = light.style.backgroundColor === 'yellow' ? '#ddd' : 'yellow';
            });
            gameContainer.appendChild(light);
        }
    }
});
