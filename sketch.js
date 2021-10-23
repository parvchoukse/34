const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.constraint
var engine, world;
var ground 
var box1 
var box2
var box3
var box4 
var box5 
var box6 
var box7 
var box8 
var box9
var box10
var box11 
var box12
var box13
var box14
var box15
var ball
var rope
 function setup(){
 createCanvas(3000,3000)
 engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,600,1200,40)
    box1=new Box(900,150,80,80)
    box2=new Box(900,140,80,80)
    box3=new Box(900,130,80,80)
    box4=new Box(900,120,80,80)
    box5=new Box(900,110,80,80)
    box6=new Box(900,100,80,80)
    box7=new Box(1100,90,80,80)
    box8=new Box(1100,80,80)
    box9=new Box(1100,70,80,80)
    box10=new Box(1100,60,80,80)
    box11=new Box(1100,50,80,80)
    box12=new Box(1100,40,80,80)
    box13=new Box(1100,30,80,80)
    box14=new Box(1100,20,80,80)
    box15=new Box(100,10,80,80)
    ball=new Ball(200,200,80,80)
    rope=new Rope(ball.body,{x:700,y:70})
 }
 function draw(){
     background("red")
     Engine.update(engine);
     ground.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     ball.display();
     rope.display();
 }