class Game{
    constructor() {
        this.name = name;
    }
    start() {
        this.loop();
    }

}

window.onload = () => {
    checkStorage();
    nav();
    startLoop();
    setInterval(() => {
        if (panel === "game") {
            game.game = new Game();
            game.game.start();
            panel = "game process";
        }
    }, 500)
}

