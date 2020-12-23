
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boypic , ground , slingshot , rock , tree , mango1 , mongo2 , mongo3 , mango4 , mango5 , mango6 , mango7 , mango8 , mango9 , mango10 , mango11 , bodyA , bodyB; 

function preload()
{
boypic = loadImage("boy.png");
tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1360 , 621);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(680,600,1360,50);
  rock = new Rock(180,440,40,40);
  slingshot = new Sling(rock.body,{x:155,y:480})
  mango1 = new Mango(1000,200,50,50);
  mango2 = new Mango(930,180,60,60);
  mango3 = new Mango(950,250,50,50);
  mango4 = new Mango(890,260,50,50);
  mango5 = new Mango(820,290,50,50);
  mango6 = new Mango(750,240,50,50);
  mango7 = new Mango(840,210,50,50);
  mango8 = new Mango(1050,100,70,70);
  mango9 = new Mango(930,100,60,60);
  mango10 = new Mango(1100,200,70,70);
  mango11 = new Mango(1200,220,70,70);
	Engine.run(engine);
  
}

function detectcollision(bodyA , bodyB){
  bodyAposition = bodyA.body.position ;
  bodyBposition = bodyB.body.position ;
  
  var distance = dist(bodyAposition.x,bodyAposition.y,bodyBposition.x,bodyBposition.y);
  if(distance<bodyA.radius + bodyB.radius){
    Matter.Body.setStatic(bodyB.body , false );
  }
    }

function draw() {
  rectMode(CENTER);
  background(255); 
  imageMode(CENTER);
  image(boypic,200,525,150,200);
  image(tree,1000,300,600,590)
  ground.display();
  rock.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  detectcollision(rock.body , mango1 );
  detectcollision(rock.body , mango2 );
  detectcollision(rock.body , mango3 );
  detectcollision(rock.body , mango4 );
  detectcollision(rock.body , mango5 );
  detectcollision(rock.body , mango6 );
  detectcollision(rock.body , mango7 );
  detectcollision(rock.body , mango8 );
  detectcollision(rock.body , mango9 );
  detectcollision(rock.body , mango10 );
  detectcollision(rock.body , mango11 );

  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingshot.fly();
}

function keyPressed(){
  //slingshot.bodyA = bodyA ; 
  if(keyCode===32){
    slingshot.attach(rock.body);
    }
}

