const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,ball,ground;

function preload()
{
    
}

function setup() {
    createCanvas(1500, 600);
    

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.

    ball = new PAPER(20,300,70);
    ground = new GROUND(750,580,1500,10);
    dustbin = new DUSTBIN(920,565,100,10);
    dustbinRight = new DUSTBIN(1005,435,10,140);
    dustbinLeft = new DUSTBIN(925,435,10,140);
    dustbinMain = new DUSTBIN(910,435,140,140);
    
    Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background("white");
    
    Engine.update(engine);

    ball.display();
    ground.display();
    dustbin.display();
    dustbinRight.display();
    dustbinLeft.display();
    dustbinMain.display();

  drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}
