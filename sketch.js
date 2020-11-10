
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof1;
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new Roof(450,100,300,20);

	bob1=new Bob(350,350);
	bob2=new Bob(400,350);
	bob3=new Bob(450,350);
	bob4=new Bob(500,350);
	bob5=new Bob(550,350);

	chain1=new Chain(roof1.body,bob1.body,-120,0);
	chain2=new Chain(roof1.body,bob2.body,-60,0);
	chain3=new Chain(roof1.body,bob3.body,0,0);
	chain4=new Chain(roof1.body,bob4.body,60,0);
	chain5=new Chain(roof1.body,bob5.body,120,0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightblue");

  roof1.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
	}
}