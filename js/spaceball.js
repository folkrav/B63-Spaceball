    // Sprites
var ctx = null,
    background = null,
    platform = new Array(),
    ball = null,

    // Key listeners
    rightPushed = false,
    leftPushed = false,
    spacePushed = false,

    // Sprite settings
    alive = true,
    blockSize = 40,
    blockY = 375,
    ballSize = 20,
    moveSpeed = 5;


window.onload = function () {
    ctx = document.getElementById("spaceball").getContext("2d");

    // Load sprites
    var img = new Image();
    img.src = "images/space.jpg";
    background = new Background(img);

    for (var i = 0; i < 150; i++) {
        // force a platform in the first blocks
    	if (Math.random() > 0.2 || i <= 3) {
    		platform.push(new Block(i * blockSize));
    	}
    }

    ball = new Ball(50, 150, ballSize);

    // Start tick loop
    tick();
};

function tick() {
    if (alive) {
        movement();
        background.tick();
        managePlatform();
        ball.tick();
        window.requestAnimationFrame(tick);
    }
    else {
        ctx.font = "64px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("You're dead!", 75, 250, 500);
    }
};

function managePlatform() {
    for (var i = 1; i < platform.length; i++) {
        platform[i].tick();
    }

    var lastBlock = platform[platform.length - 1];
    if (ball.x >= lastBlock.x - 1000) {
        platform.push(new Block(lastBlock.x + blockSize));
    }
    if (ball.x >= platform[0].x + 500) {
        platform.shift();
    }
};

function movement() {
    if (leftPushed) {
        if (ball.x >= ballSize) {
            ball.x -= moveSpeed;
        }
    }
    if (rightPushed) {
        if (ball.x >= 300) {
            for (var i = 0; i < platform.length; i++) {
                platform[i].x -= moveSpeed;
            }
        }
        else {
            ball.x += moveSpeed;
        }
    }
    if (spacePushed) {
        var jumpHeight = 15;
        if (ball.y + ball.radius == blockY) {
            while (jumpHeight >= 0) {
                ball.speed -= ball.accel;
                jumpHeight--;
            }
        }
    }
}

document.onkeydown = function (e) {
    if (e.which == 65)      leftPushed = true;
    else if (e.which == 68) rightPushed = true;
    else if (e.which == 32) spacePushed = true;
};

document.onkeyup = function (e) {
    if (e.which == 65)      leftPushed = false;
    else if (e.which == 68) rightPushed = false;
    else if (e.which == 32) spacePushed = false;
};
