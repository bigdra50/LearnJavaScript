var startTime = null;
var displayArea = document.getElementById("display-area");

function start(){
    startTime = Date.now();
    document.body.onkeypress = stop;
}

function stop() {
    var currentTime = Date.now();
    var sec = (currentTime - startTime) / 1000;
    if(9.5 <= sec && sec <= 10.5){
        displayArea.innerText = sec+"!";
    }else{
        displayArea.innerText = sec+"...";
    }
}

if(confirm("OKを押して10秒だと思ったら何かキーを押してください")){
    start();
}