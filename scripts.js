var game = document.querySelector('.game');
var mario = document.querySelector('.mario');
var pipe = document.querySelector('.pipe');
var clouds = document.querySelector('.clouds');
var restart = document.querySelector('.restart');
var score = 0;

let pul = () => {
    if (!game.classList.contains('start')) start();
    else {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

window.addEventListener('keydown', pul);
window.addEventListener('click', pul);

var loop = false;
setInterval(() => {
    if (!loop) return;
    document.querySelector('.score').innerHTML = 'score: ' + Math.ceil(score += 0.01); 
    var pipeLeft = pipe.offsetLeft;
    var cloudsLeft = clouds.offsetLeft;
    var marioBottom = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipeLeft <= 100 && pipeLeft > 0 && marioBottom <= 80) {
        game.classList.remove('start');
        pipe.style.left = pipeLeft + 'px';
        mario.style.bottom = marioBottom + 'px';
        clouds.style.left = cloudsLeft + 'px';
        mario.style.marginLeft = '30px';
        mario.style.height = '80px';
        mario.src = 'imgs/game-over.png';
        restart.style.display = 'block'
        loop = false;
        score = 0;
    }
}, 10);



function start() {
    restart.style.display = 'none';
    pipe.style.right = '0';
    game.classList.add('start');
    loop = true;
    document.querySelector('.restart h2').innerHTML = 'Fim de jogo!';
    var btn = document.querySelector('.restart button');
    btn.innerHTML = 'Reniciar';
    pipe.style.left = 'auto';
    clouds.style.left = 'auto';
    mario.src = 'imgs/mario.gif';
    mario.style.marginLeft = '0';
    mario.style.height = '120px';
    mario.style.bottom = '0';
}