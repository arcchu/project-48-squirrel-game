var acorns
var acornsGroup
var acornImg
var squirrel
var squirrelImg
var leftSquirrelImg
var squirrelCollided
var back
var bgImg
var ground
var acorns
var score = 0
function preload(){
  acornImg = loadImage("acorn.png")
  squirrelImg = loadImage("squirrel.png")
  bgImg = loadImage("forest_background.jpg")
  squirrelCollided = loadImage("squirrel_eating.png")
  leftSquirrelImg = loadImage("left_squirrel.png")
}

function setup() {
  createCanvas(1850,850);
  back = createSprite(925,425)
  back.addImage(bgImg)
  back.scale = 4

  squirrel = createSprite(925,750)
  squirrel.addImage(squirrelImg)
  squirrel.debug = true
  //squirrel.setCollider("circle", 0, 0, 80)
  ground = createSprite(925, 825, 1800, 10)
  ground.visible = false
  acornsGroup = new Group()
  squirrelCollided.scale = 0.5
}

function draw() 
{
  background(30);
  if(keyDown("space")){
squirrel.velocityY = -15
  }
squirrel .velocityY = squirrel.velocityY+1
if(keyDown(RIGHT_ARROW)){
  squirrel.x = squirrel.x+10
  squirrel.addImage(squirrelImg)
}
if(keyDown(LEFT_ARROW)){
  squirrel.x = squirrel.x-10
  squirrel.addImage(leftSquirrelImg)
}
if(acornsGroup.isTouching(squirrel)){
  score = score+1
  acorns.destroy()
  //squirrel.addImage(squirrelCollided)
 
}
//squirrel.addImage(squirrelImg)
  spawnAcorns();
  squirrel.collide(ground)
  drawSprites()
  textSize(40)
  fill("white")
  text("Score: "+ score,1650, 50)
}
function spawnAcorns(){
  if(frameCount%60 == 0){
    acorns = createSprite(200,10,50,50)
    acorns.addImage(acornImg)
    acorns.debug = false
    acorns.scale = .1
    acorns.x = Math.round(random(100,1500))
    acorns.velocityY = 4
    acornsGroup.add(acorns)

  }
}

 

