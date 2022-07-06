var ping = new Audio('ping.mp3');
var pong = new Audio('pong.mp3');
var gameover = new Audio('gameover.wav');
let score = 0;
let canScore = 1;
const ball = document.getElementsByClassName("ball")[0];
const paddle = document.getElementsByClassName("paddle")[0];
const otherPaddle = document.getElementsByClassName("paddle")[1];
const edge = document.getElementsByClassName("edge")[0];
function colliding(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    );
}
function gameOver(){
    
    gameover.play();
    gameover = new Audio();
    paddle.parentNode.removeChild(paddle);
    otherPaddle.parentNode.removeChild(otherPaddle);
    edge.parentNode.removeChild(edge);
    ping = ""
    pong = ""
    endImage = document.createElement("img");
    endImage.src = "gameover.png";
    endImage.classList.add("end");
    document.body.appendChild(endImage)

}
function collisionDetection(){
    if(colliding(ball,paddle)){
        ball.style.left = 0+"px";
        if(canScore == 1){
        score += 1;
        document.getElementsByClassName("scorecounter")[0].innerText = score;
        canScore = 0;
        setTimeout(function(){canScore = 1},200)
        }
        try{pong.play();}catch{}
    }
    if(colliding(ball,otherPaddle)){
        ball.style.left = 100+"%";
        try{ping.play();}catch{}
    }
    if(colliding(ball,edge)){
        gameOver();
    }
}
function gameStart(){
    ball.style.display = "block";
    paddle.style.display = "block";
    otherPaddle.style.display = "block";
    document.getElementsByTagName("button")[0].parentNode.removeChild(document.getElementsByTagName("button")[0])
    document.getElementsByClassName("startbutton")[0].style.display = "hidden"
    document.getElementsByClassName("startbutton")[0].parentNode.removeChild(document.getElementsByClassName("startbutton")[0])
    document.body.addEventListener("mousemove",function(e){
        paddle.style.top = e.clientY-75 + "px";
    })
    setTimeout(function(){ball.style.left = 100+"%"},1);
    setInterval(function(){collisionDetection()},1);
}
document.getElementsByTagName("button")[0].addEventListener("click",function(){gameStart();})
ball.style.display = "none";
paddle.style.display = "none";
otherPaddle.style.display = "none";