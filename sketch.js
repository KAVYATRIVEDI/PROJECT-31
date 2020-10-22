function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  ground = new Ground (460,800,20,20);
  drawSprites();
}