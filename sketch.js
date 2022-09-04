var Ganesh, Ganesh_img
var rak1, rak2, rak3
var rak1_img, rak2_img, rak3_img
var back, back_img
var nandi, nandi_img, nandi2_img
var shiva, shiva_img
function preload() {
  Ganesh_img = loadImage("ganesh.png")
  rak1_img = loadImage("rak1.png") 
  rak2_img = loadImage("rak2.png") 
  rak3_img = loadImage("rak3.png") 
  back_img = loadImage("background.png")
  nandi_img = loadImage("nandi.png")
  nandi2_img = loadImage("nandi2.png")
  shiva_img = loadImage("shiva.png")

}

function setup() {
 createCanvas(800,600)
 //create background
 back = createSprite(400,300,800,600)
 back.addImage("back",back_img);
 back.scale = 1.2;
 //create borders
 border1 = createSprite(788,300,25,600)
 border1.shapeColor = ("orange")
 border2 = createSprite(400,12,800,25)
 border2.shapeColor = ("orange")
 border3 = createSprite(12,300,25,600)
 border3.shapeColor = ("orange")
 border4 = createSprite(400,588,800,25)
 border4.shapeColor = ("orange")
 //create swarg
 border = createSprite(400,480,750,5)
 border.shapeColor = ("lightblue")
 shiva = createSprite(400,530,80,80)
 shiva.addImage("shiva",shiva_img)
 shiva.scale = 0.3;
 nandi = createSprite(600,550,20,20)
 nandi2 = createSprite(210,550,20,20)
 nandi.addImage("nandi",nandi2_img)
 nandi.scale = 0.3;
 nandi2.addImage("nandi",nandi_img)
 nandi2.scale = 0.3;
 //create ganesh.ji 
 Ganesh = createSprite(400,436,20,20)
 Ganesh.addImage("ganesh",Ganesh_img)
 Ganesh.scale = 0.2;
 

} 

function draw() {
background(220)
//moving ganesh.ji
 if(keyDown("RIGHT_ARROW")) {
  Ganesh.x = Ganesh.x + 8; 
  Ganesh.velocityX = 2
 }
 if(keyDown("LEFT_ARROW")) {
  Ganesh.x = Ganesh.x + -8; 
  Ganesh.velocityX = -2
 }

createEdgeSprites();
spawnVillians();
drawSprites()

}

function spawnVillians() {
  if(frameCount % 60==0) {
    villian1 = createSprite(400,50,740,10)
    

  }








}
 























