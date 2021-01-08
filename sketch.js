
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(50,315,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(200,350,800,20);
  ground.x = ground.width /2;
  score=0
  FoodGroup=new Group()
   obstaclesGroup=new Group()
  

  
}


function draw() {
   background(255);
  //displaying score
  text("Score: "+ score, 350,50);
    ground.velocityX = -4;
    //scoring
    score = score + Math.round(frameCount/60);
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -13;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  spawnbannanas()
  spawnobstacle()
  drawSprites();
  
}
function spawnbannanas() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     bannana = createSprite(600,100,40,10);
    bannana.y = Math.round(random(50,200));
    bannana.addImage(bananaImage);
    bannana.scale = 0.1;
    bannana.velocityX = -3;
    
     //assign lifetime to the variable
    bannana.lifetime = 300;
    
    //adjust the depth
    bannana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding cloud to the group
   FoodGroup.add(bannana);
    }
}
function spawnobstacle() {
  //write code here to spawn the clouds
   if (frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 300;
    
    //adjust the depth
   
    //adding cloud to the group
   obstaclesGroup.add(obstacle);
    } 
}





