document.addEventListener('DOMContentLoaded', (event) => {
    const square = document.getElementById('moving-square');
    const gameContainer = document.getElementById('game-container');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    function moveSquare() {
        const containerRect = gameContainer.getBoundingClientRect();
        const maxX = containerRect.width - square.offsetWidth;
        const maxY = containerRect.height - square.offsetHeight;

        const randomX = Math.floor(Math.random() * (maxX + 1));
        const randomY = Math.floor(Math.random() * (maxY + 1));

        square.style.left = `${randomX}px`;
        square.style.top = `${randomY}px`;
    }

    square.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Puntuación: ${score}`;
        moveSquare();
    });

    moveSquare();
    setInterval(moveSquare, 700);  // 100 rapidisimo, + alto mas lento(500)

    // Ensure the square adjusts its position if the screen size changes
    window.addEventListener('resize', moveSquare);
});
