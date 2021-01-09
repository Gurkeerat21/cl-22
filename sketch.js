const Engine = Matter.Engine; 
const World = Matter.World;
 const Bodies = Matter.Bodies;
  var engine,world,body; 
  function setup(){ 
      createCanvas(400,400);
 engine = Engine.create(); 
 world = engine.world;
 var option={
     isStatic:true
 }
 body = Bodies.rectangle(200,200,100,100,option);
  World.add(world,body);
 } 

 function draw(){
      background("orange");
      Engine.update(engine)
      rectMode(CENTER)
   rect(200,body.position.y,100,100); 
}