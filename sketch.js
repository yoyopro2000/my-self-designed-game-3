const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   ground = new Ground(600,height,1200,20);
   pink = new Pink(30,30,50,50)
   red = new Orange(30,30,50,50)
   yellow = new Pink(30,30,50,50)
   orange = new Orange(30,30,50,50)
   blue = new Pink(30,30,50,50)
   green = new Orange(30,30,50,50)
   
   
}

function draw(){
background("green")    
    Engine.update(engine);
    pink.display()
    orange.display()
    red.display()
    yellow.display()
    blue.display()
    green.display()
   
}




