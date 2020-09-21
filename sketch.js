const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  var ground_options = {
isStatic:true
  }

    ground = Bodies.rectangle(200,390,400,20, ground_options);
    World.add(world,ground);

    var ground1_options = {
        restitution:1.0
          }

    ground1 = Bodies.circle(200,100,50, ground1_options);
    World.add(world,ground1);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y ,400,20);

ellipseMode(CENTER);
ellipse(ground1.position.x, ground1.position.y ,50,50);



}