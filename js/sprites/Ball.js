function Ball(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = 3;
    this.accel = 0.5;
};

Ball.prototype.tick = function() {
    this.speed += this.accel;
    this.y += this.speed;

    if (this.checkCollision()) {
        this.y = blockY - this.radius;
        this.speed = -this.speed / 4;

        if (Math.abs(this.speed) < 1) {
            this.speed = 0;
        }
    }

    if (ball.y >= 450 + this.radius) {
        alive = false;
    }

    this.draw();
};

Ball.prototype.checkCollision = function () {
    for (var i = 0; i < platform.length; i++) {
        if (this.y + this.radius >= platform[i].y &&
            this.x >= platform[i].x &&
            this.x <= platform[i].x + blockSize) {
                return true;
        }
    }
    return false;
};

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'lightgreen';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    ctx.closePath();
};
