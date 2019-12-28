var game = {
    startTime : null,
    displayArea:  document.getElementById("display-area"),
    start: function () {
            game.startTime = Date.now();
            document.body.onkeypress = game.stop;
    },
    stop: function () {
        var currentTime = Date.now();
        var sec = (currentTime - game.startTime) / 1000;
        if (9.5 <= sec && sec <= 10.5) {
            game.displayArea.innerText = sec + "!";
        } else {
            game.displayArea.innerText = sec + "...";
        }
    }
};
if (confirm("OKを押して10秒だと思ったら何かキーを押してください")) {
    game.start();
}