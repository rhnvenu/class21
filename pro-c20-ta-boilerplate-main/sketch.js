var ball
var button1
var button2
var left,right,top,bottom
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;
var ground;
function setup()
{
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;

bottom=new Ground(200,390,400,20)
top=new Ground(200,10,400,20)
left=new Ground(10,200,20,400)
right=new Ground(390,200,20,400)

button1=createImg("pushbutton.png")
button1.position(220,30)
button1.size(50,50)
button1.mouseClicked(hforce)

button2=createImg("pushbutton.png")
button2.position(20,30)
button2.size(50,50)
button2.mouseClicked(vforce)





var ballOptions={
restitution:0.7


}
ball=Bodies.circle(200,10,30,ballOptions)
World.add(world,ball)
}

function draw() 
{
  background(51);
  Engine.update(engine)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,30,30)
 left.display()
  right.display()
    //top.display()
    bottom.display()
  
 
}

function hforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})








}



function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
  
  
  
  
  
  
  
  
  }