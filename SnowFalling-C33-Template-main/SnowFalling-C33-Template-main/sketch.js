function preload(){
  bgimg=loadImage("snow2.jpg")
img2=loadImage("snow3.jpg")

}
function setup() {
  createCanvas(800,400);
 s1= createSprite(400, 200, 50, 50);
 s1.scale=0.3
s1.addImage(img2)

}

function draw() {
  background(bgimg);  
  drawSprites();
}