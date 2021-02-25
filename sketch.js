const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload() {

}

function setup() {
    createCanvas(800,700);

    engine = Engine.create();
	world = engine.world;

    ground = new Ground(200,height,200,20);
}

function draw() {
    background("black");

    ground.display();
}
