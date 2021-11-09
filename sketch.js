var BackgroungImage,BoyImg
var scene,Boy 
function preload(){
  BackgroungImage=loadImage("path.png")
BoyImg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  scene=createSprite(200,200)
  scene.addImage(BackgroungImage)
  scene.scale=1.2
  scene.velocityY=3

  Boy=createSprite(130,340,30,30)
  Boy.addAnimation("JakeRunning",BoyImg)
  Boy.scale=.09

  leftBoundary=createSprite(0,0,100,800)
  rightBoundary=createSprite(400,0,100,800)
  leftBoundary.visible=false;
  rightBoundary.visible=false;
}

function draw() {
  if(scene.y > 400 ){
    scene.y = height/2;
  }
  Boy.x=World.mouseX
  edges= createEdgeSprites();
  Boy.collide(edges[3]);
  Boy.collide(leftBoundary);
  Boy.collide(rightBoundary);
  background(0);
drawSprites()
}
