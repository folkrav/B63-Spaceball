var ctx = null,
    background = null,
    platform = new Array();
    ball = null;

window.onload = function () {
    ctx = document.getElementById("spaceball").getContext("2d");

    var img = new Image();
    img.src = "images/space.jpg";
    background = new Background(img);

    ball = new Ball();

    tick();
}

function tick() {
    background.tick();
    ball.tick();

    window.requestAnimationFrame(tick);
}

function animateBall() {

}

function animatePlatform() {

}
