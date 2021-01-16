const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var engine, world;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,10);
}

function draw() {
  background(0);  

  for(var k=0; k <=width; k=k+80 ){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j = 10; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,50));
  }

  for(var j = 40; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,120));
  }

  for(var j = 30; j<=width-20; j=j+50)
  {
    plinkos.push(new Plinko(j,190))
  }

  for(var j=20; j<=width-30; j=j+50)
  {
    plinkos.push(new Plinko(j,260))
  }



  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for(var j = 0; j< particles.length; j++)
  {
    particles[j].display();
  }

  for(var k = 0; k <divisions.length; k++)
  {
    divisions[k].display();
  }

  for(var j = 0; j<plinkos.length; j++)
  {
    plinkos[j].display();
  }
  drawSprites();
  Engine.update(engine);

  ground.display();
}