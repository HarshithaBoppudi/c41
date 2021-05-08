const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var boy
var maxDrops=100;
var Drop=[];
function preload(){
 
}

function setup(){
    createCanvas(480,700);
    engine = Engine.create();
    world = engine.world; 
    Umbrella=new umbrella(200,300)
    if(frameCount%150==0){
      for(var i=0;i<maxDrops;i++){
        Drop.push(new drops(random(0,400),random(0,400)))
      }
    }
  
}

function draw(){
  Engine.update(engine)
  background(0);
Umbrella.display();
for(var i=0;i<maxDrops;i++){
  Drop[i].display();
  Drop[i].updatey()
}
  

}   

