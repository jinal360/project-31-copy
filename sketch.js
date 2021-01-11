const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = []; 

function setup() {
  createCanvas(800,480);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (500,470,400,10);
  wall1 = new Division(300,472,10,400);
  wall2 = new Division(350,472,10,400);
  wall3 = new Division(400,472,10,400);
  wall4 = new Division(450,472,10,400);
  wall5 = new Division(500,472,10,400);
  wall6 = new Division(550,472,10,400);
  wall7 = new Division(600,472,10,400);
  wall8 = new Division(650,472,10,400);
  wall9 = new Division(700,472,10,400);
  ball = new Particle((random(100,450)),0,10)
}

function draw() {
  background("black");  
 
  ground.display()
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  wall5.display()
  wall6.display()
  wall7.display()
  wall8.display()
  wall9.display()
  ball.display();



}