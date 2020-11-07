
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var log1
var log2
var log3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new Paper(200,200)
    ground = new Ground(400,500, 800, 10)
    log1 = new Log(685,490,20,100)
    log2 = new Log(600,490,150,20)
    log3 = new Log(515,490,20,100)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_Arrow){
Matter.body.applyForce(paperObjects.body, paperObjects.body.position,{x:85, y:-85})
}
}

