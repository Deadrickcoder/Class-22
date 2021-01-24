var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  Object1=createSprite(200,400,50,50);
  Object1.shapeColor="green";
  Object2=createSprite(800,400,50,50);
  Object2.shapeColor="green";
  Object3=createSprite(1000,400,50,50);
  Object3.shapeColor="green";
  Object4=createSprite(200,600,50,50);
  Object4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,Object2)){
  movingRect.shapeColor = "red";
  Object2.shapeColor = "red";
  }
  else{
  movingRect.shapeColor = "green";
  Object2.shapeColor = "green";
  }
  drawSprites();
}


