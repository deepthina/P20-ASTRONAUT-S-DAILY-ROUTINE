var astronaut;
var bath,brush,drink,eat,sleep,gym,move;
var issImage, iss;


function preload(){
  issImage= loadImage("images/iss.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  brush = loadAnimation("images/brush.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  move = loadAnimation("images/move.png","images/move1.png","images/move2.png");
  sleep = loadAnimation("images/sleep.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  astronaut= createSprite(800, height-300, 50, 50);
  astronaut.addAnimation("sleep",sleep);
  astronaut.addAnimation("bath",bath);
  astronaut.addAnimation("brush",brush);
  astronaut.addAnimation("drink",drink);
  astronaut.addAnimation("eat",eat);
  astronaut.addAnimation("gym",gym);
  astronaut.addAnimation("move",move);
  astronaut.scale=0.2;
}

function draw() {
  background(issImage); 

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown(UP_ARROW)){
    astronaut.changeAnimation("brush",brush);
    astronaut.x=800;
    astronaut.y=height-300;
    astronaut.velocityX=0;
    astronaut.velocityY= 0;
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.changeAnimation("gym",gym);
    astronaut.x=800;
    astronaut.y=height-300;
    astronaut.velocityX=0;
    astronaut.velocityY= 0;
  }

  if(keyDown(LEFT_ARROW)){
    astronaut.changeAnimation("eat",eat);
    astronaut.x=800;
    astronaut.y=height-300;
    astronaut.velocityX=0;
    astronaut.velocityY= 0;
  }

  if(keyDown(RIGHT_ARROW)){
    astronaut.changeAnimation("bath",bath);
    astronaut.x=800;
    astronaut.y=height-300;
    astronaut.velocityX=0;
    astronaut.velocityY= 0;     
  }

  if(keyDown("m")){
    astronaut.changeAnimation("move",move);
    astronaut.velocityX=random(-3,3);
    astronaut.velocityY= random(-3,-3);
  }

  drawSprites();

  fill("red");
  textSize(25);
  text("Instructions:",20,500);
  fill("white");
  textSize(20);
  text("PRESS UP ARROW TO BRUSH",20,530);
  text("PRESS DOWN ARROW TO GYM",20,560);
  text("PRESS LEFT ARROW TO EAT",20,590);
  text("PRESS RIGHT ARROW TO BATH",20,620);
  text("PRESS M KEY TO MOVE",20,650);
}