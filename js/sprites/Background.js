function Background(bgImage) {
    this.bgImage = bgImage;
};

Background.prototype.tick = function() {
    if (this.bgImage.complete) {
        var scaling = -(ball.y + 1000) / (blockY + 1000);
        var width = this.bgImage.width / scaling;
        var height = this.bgImage.height / scaling;

        console.log("new width : " + width);
        console.log(this.bgImage.width);
        var translateX = (this.bgImage.width - width) / 2;
        var translateY = (this.bgImage.height - height) / 2;
        ctx.translate(translateX, translateY);
        ctx.drawImage(this.bgImage, 0, 0, width, height);
        ctx.translate(-translateX, -translateY);
    }
};
