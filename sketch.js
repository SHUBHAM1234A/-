
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var bob1,bob2,bob3,bob4,bob5,roof

function preload() {
	bg = loadImage("BG.jpg");
}

function setup() {
	createCanvas(600,500);
	
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(300,175,450,30);
	bob1 = new Bob(300,375,30);
	bob2 = new Bob(130,375,30);
	bob3 = new Bob(150,375,30);
	bob4 = new Bob(200,375,30);
	bob5 = new Bob(250,10,30);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(bg);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  drawSprites();
}