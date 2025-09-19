function setup() {
  createCanvas(800, 600);
  background(220);
}

let playerX = 50;
let playerY = 50; 
let playerSpeed = 3;

let mySpriteImage;
    function preload() {
      mySpriteImage = loadImage("imagesfolder/dumbgo.png");
    }

function draw() {
background(50, 50, 100);
  fill(0,0,255);
  let wall1 = rect(200,0,30,400);
  let wall2 = rect(400,200,30,400);
  let hitWall1 = collideRectCircle(200, 0, 55, 400, (playerX+35), (playerY+15), 20);
  if (hitWall1) {
    playerX = 50;
    playerY = 50;
  }
    let hitWall2 = collideRectCircle(400,200,55,400, (playerX+35), (playerY+35), 20);
  if (hitWall2) {
    playerX = 50;
    playerY = 50;
  }
  let hitGoal = collideRectCircle(750, 550, 50, 50,                      playerX,playerY,20);
  if (hitGoal) {
    background(0);
    fill(255);
    textSize(128);
    textAlign(CENTER);
    text("YOU WIN!", width / 2 , height / 2);
  }
  fill(0,255,0);
  let goal = rect(750,550,50,50);
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += playerSpeed;
  }
   if (keyIsDown(LEFT_ARROW)) {
    playerX -= playerSpeed;
  }
   if (keyIsDown(DOWN_ARROW)) {
    playerY += playerSpeed;
  }
   if (keyIsDown(UP_ARROW)) {
    playerY -= playerSpeed;
   }
  image(mySpriteImage,playerX,playerY,50,50);
}