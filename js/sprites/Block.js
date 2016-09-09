function Block(x) {
    this.x = x;
    this.y = blockY;
}

Block.prototype.tick = function() {
    ctx.fillStyle = "#77A7F1";
    ctx.fillRect(this.x, this.y, blockSize, blockSize);
    ctx.strokeStyle = "black";
    ctx.strokeRect(this.x, this.y, blockSize, blockSize);
}
