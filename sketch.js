function setup() {
  createCanvas(800,400);
  Block1 = createSprite(400, 200, 50, 50);
  Block2 = createSprite(150, 75, 35, 75);
}

function draw() {
  background("purple");  
  Block1.x = mouseX
  Block1.y = mouseY
  if(abs(Block1.x-Block2.x) <= Block1.width/2 + Block2.width/2 &&
  abs(Block1.y-Block2.y) <= Block1.height/2 + Block2.height/2){
    Block1.shapeColor = "red"
    Block2.shapeColor = "red"
  } else{
    Block1.shapeColor = "blue"
    Block2.shapeColor = "blue"
  }
  drawSprites();
}