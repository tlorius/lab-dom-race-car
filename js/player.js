class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = 230;
    this.top = 540;
    this.width = 80;
    this.height = 40;
    this.directionX = 0;
    this.directionY = 0;

    this.element = document.createElement("img");
    this.element.src = "../images/car.png";
    this.element.style.position = "absolute";
  }
}
