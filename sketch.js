
var backgImage
var score = 0;


function preload(){
 backImage = loadImage("background1.jpg")

}
function setup(){
  createCanvas(windowWidth,windowHeight);
  
  edges= createEdgeSprites();
  
  //ground = createSprite(width/2,height/2,width,1);
  //road = createSprite(width/2,height/2,1,1);
  trext = creatSprite()
  score =0;
  
  
  //road.addImage(road_image);

} 
 
function draw() {
 background();
  // block.debug = true;
 

  
  drawSprites();

 } 
 