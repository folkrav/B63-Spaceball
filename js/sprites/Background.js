function Background(bgImage) {
	this.bgImage = bgImage;
}

Background.prototype.tick = function() {
	if (this.bgImage.complete) {
		ctx.drawImage(this.bgImage, 0, 0);
	}
}