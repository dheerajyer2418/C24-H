
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1;
var ground;
var rectLeft,rectRight,rectBot

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,200,50,50);
	ground = new Ground(400,height,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	paper1.display();
	ground.display();

	rectLeft = createSprite(600,660,20,70);
	rectRight = createSprite(800,660,20,70);
	rectBot = createSprite(700,700,200,20);

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85,y:-85})
	}
}


