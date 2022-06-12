var b1,b2,b3,b4,b5;
var start;
var player;
function setup() {
  createCanvas(1200,600);
  b1 = createSprite(200, 220,20,100);
  b2 = createSprite(300,220,20,120);
  start = createSprite(100,550,120,50);
  start.shapeColor="green"
  player = createSprite(50,500,20,20);
  player.shapeColor="orange";

  
}

function draw() {
  background(255,255,255);  
  if(keyIsDown(87)||keyIsDown(119) ){
    player.x +=5;
  }
  if (keyIsDown(83)||keyIsDown(115)){
    player.x -=5;
  }
  if(keyIsDown(65)||keyIsDown(97)){
    player.y+=5;
  }
  if(keyIsDown(68)||keyIsDown(100)){
    player.y -=5;
  }
  drawSprites();
}