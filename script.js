/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size,speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;"  alt=""/>';
  };

  this.moveRight = function(){
    this.left += speed;
    console.log('ok: ' + this.left);
  };

  this.moveleft = function () {
    this.left -= speed;
  };

  this.moveUp =function () {
    this.top -= speed;
  };

  this.moveDown = function () {
    this.top += speed;
  };

}

var hero = new Hero('luf.jpg', 20, 30, 300,50);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();