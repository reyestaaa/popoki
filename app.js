const popoki = document.querySelector('#popoki');
const btn = document.querySelector('#btn');
let skor = document.querySelector('#counter')
let score = 0;
const kaget = "./image/rifqyS.png";
const gaKaget = "./image/rifqyM.png";

const suaraKaget = new Audio("./sound/woh.mp3");

btn.addEventListener("mousedown", loncat);
btn.addEventListener("mouseup", gaLompat);


function loncat(){
    tambahScore();
    popoki.src = kaget;
    suaraKaget.play();
}
function gaLompat(){
    popoki.src = gaKaget;
}
function tambahScore(){
    score++;
    skor.innerHTML = score;
}
btn.addEventListener("touchstart", function(e){
    e.preventDefault();
    loncat();
})
btn.addEventListener("touchend", function(e){
    e.preventDefault();
    gaLompat();
})


