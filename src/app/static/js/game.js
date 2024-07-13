document.addEventListener("DOMContentLoaded", function () {
    const lights = document.querySelectorAll(".light");
    const lightOrder = [];
    let playerOrder = [];
    let level = 1;

    // Generate a random pattern for the current level
    function generatePattern(level) {
        const pattern = [];
        for (let i = 0; i < level + 2; i++) {
            const randomIndex = Math.floor(Math.random() * lights.length);
            pattern.push(randomIndex);
        }
        return pattern;
    }

    // Display the pattern to the player
    function showPattern(pattern) {
        let delay = 500;
        pattern.forEach((index, i) => {
            setTimeout(() => {
                lights[index].style.backgroundColor = '#ffd700';
                setTimeout(() => {
                    lights[index].style.backgroundColor = '#d3d3d3';
                }, 500);
            }, delay * (i + 1));
        });
    }

    // Handle player's click
    lights.forEach((light, index) => {
        light.addEventListener("click", () => {
            playerOrder.push(index);
            light.style.backgroundColor = '#ffd700';
            setTimeout(() => {
                light.style.backgroundColor = '#d3d3d3';
            }, 500);

            // Check if player's pattern matches the correct pattern
            if (playerOrder.length === lightOrder.length) {
                if (playerOrder.every((val, i) => val === lightOrder[i])) {
                    alert("正解！次のレベルへ！");
                    level++;
                    startGame();
                } else {
                    alert("不正解！もう一度挑戦！");
                    playerOrder = [];
                    showPattern(lightOrder);
                }
            }
        });
    });

    // Start the game
    function startGame() {
        playerOrder = [];
        lightOrder.length = 0;
        lightOrder.push(...generatePattern(level));
        showPattern(lightOrder);
    }

    startGame();
});
