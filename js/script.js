window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  function startGame() {
    game = new Game();
    game.start();
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    location.reload();
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp" || event.code === "KeyW") {
      game.player.directionY = -2;
    }
    if (event.code === "ArrowDown" || event.code === "KeyS") {
      game.player.directionY = 2;
    }
    if (event.code === "ArrowLeft" || event.code === "KeyA") {
      game.player.directionX = -2;
    }
    if (event.code === "ArrowRight" || event.code === "KeyD") {
      game.player.directionX = 2;
    }
  });

  document.addEventListener("keyup", (event) => {
    if (
      event.code === "ArrowUp" ||
      event.code === "KeyW" ||
      event.code === "ArrowDown" ||
      event.code === "KeyS"
    ) {
      game.player.directionY = 0;
    }
    if (
      event.code === "ArrowRight" ||
      event.code === "KeyA" ||
      event.code === "ArrowLeft" ||
      event.code === "KeyD"
    ) {
      game.player.directionX = 0;
    }
  });
};
