var birthTime = new Date(1998,11,5, 0, 0);
var startTime = new Date();
function updateParagraph(){
    var currentTime = new Date();
    var sec = (currentTime.getTime() - startTime.getTime()) / 1000; // getTime()でミリ秒を取得. 1000で割って秒へ変換
    document.getElementById('birth-time').innerText = sec + " 経過";
}

setInterval(updateParagraph, 1);