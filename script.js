// var timer = 60;
// var score = 0;
// var hitrn = 0;  

// function  increaseScore(){
//     score += 10;
//     document.querySelector("#scoreval").textContent = score;
// }

// function getNewHit(){
//     hitrn = Math.floor(Math.random()*10);
//     document.querySelector("#hitval").textContent = hitrn
// }

// function  makeBubble(){

//     var clutter = "";
    
//     for(var i = 1; i<= 102; i++){
//         var rn = Math.floor(Math.random()*10)
//         clutter += `<div class="bubble">${rn}</div>`;
//     }
    
//     document.querySelector("#pbtm").innerHTML = clutter;
// }

// function runTimer(){
//     var timerint  = setInterval(function (){
//         if (timer > 0){
//             timer--;
//             document.querySelector("#timerval").textContent = timer ;
//         }else{
//             clearInterval(timerint);
//             document.querySelector("#pbtm").innerHTML = `<h1 id=go >Game Over</h1>`;
//         }
//     },1000)
// }

// document.querySelector("#pbtm").addEventListener("click", function(dets){
//     var clickednum = Number(dets.target.textContent);
//     if (clickednum === hitrn){
//         increaseScore();
//         makeBubble();
//         getNewHit();

//     }
// })

// getNewHit();
// runTimer();
// makeBubble();
var totalBubbles = 0;

function generateBubbles() {
    var pbtm = document.querySelector("#pbtm");
    var pbtmWidth = pbtm.offsetWidth;
    var pbtmHeight = pbtm.offsetHeight;
    var bubbleSize = 60;
    var maxBubblesHorizontally = Math.floor( (pbtmWidth-1) / bubbleSize);
    var maxBubblesVertically = Math.floor((pbtmHeight-1) / bubbleSize);
    totalBubbles = (maxBubblesHorizontally) * (maxBubblesVertically - 4);
}

window.addEventListener('resize', generateBubbles());

var timer = 60;
var score = 0;
var hitrn = 0;  

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";
    
    for (var i = 1; i <= totalBubbles; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint  = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1 id=go >Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

getNewHit();
runTimer();
makeBubble();
