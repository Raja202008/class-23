const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1, box2;
var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    //giving value and creating the ground
    ground = new Ground(200, height, 400, 20);
    //giving value and creating the boxes
    box1 = new Box(200,300,50,50);
    box2=new Box(240,100,50,100); 

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    //display of boxes and ground
    box1.display();
    box2.display();
    ground.display();
}