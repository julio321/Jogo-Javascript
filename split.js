function Sprite(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = larguara;
	this.altura = altura;

	this.desenha = function(xcanvas, ycanvas){
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xcanvas, ycanvas, this.largura, this.altura);
	}

}