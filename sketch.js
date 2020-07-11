var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
 
  var turn = 0;
  var gameState = "end";
 
var particles = [];
var plinkos = [];

var ground,ground2;
var divisionHeight=300;

var divisions = [];
var particle;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();

  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //ground2 = new yellow(400,450,800,10);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    particle = new Particle(mouseX,10,10,10);
  
}

function draw() {
  background("black");
  noStroke();
  textSize(35)
  fill("white")
  text("Score : " + score, 10, 45)
  textSize(20)
  text("500 " , 25, 540)
  text("500 " , 105, 540)
  text("500  " , 185, 540)
  text("500  ", 263, 540)
  text("100 ", 340, 540)
  text("100  ", 420, 540)
  text("100 ", 500, 540)
  text("200  ", 580, 540)
  text("200  " , 660, 540)
  text("200  ", 740, 540)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  mousePressed();
  ground.display();
  //ground2.display();

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   //particle.display();
   if(turn>=5){
    gameState="end";
  } 
}

function mousePressed()
{
  //if(mousePressed){
   //particle.push(new Particle(mouseX,mouseY,10,10));
   // particle.display();

  ///}
 
  if(gameState!=="end")
  {
    turn++;
  
  }

 if(particle.body.position.y>760 &&  particle.body.position.y<800)
 {
  
    if(particle.body.position.x < 300)
    {
    
      score=score+500;
      particle!=null;
      
      } 
    
      //if(particle.body.position.y>301)
     // {
        // if(particle.body.position.x < 600)
        // {
          
           //score=score+100;
           //particle!=null;
           
         //  } 
          
  if(particle!=null)
  {
    particle.display();
  }

    }
  }
//}