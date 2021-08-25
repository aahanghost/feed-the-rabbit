var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("orangeLeaf.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple = createSprite(random(50,350),40,20,20);
apple.addImage(appleImg);
apple.scale = 0.08
apple.lifetime = 70;

leaf = createSprite(random(200,350),40,10,20);
 leaf.addImage(leafImg);
 leaf.scale = 0.09
leaf.lifetime = 100;

var rand = Math.round(random(1,60))
console.log(rand)


}


function draw() {
  background(0);
  //moving rabbit
  rabbit.x = World.mouseX
  apple.velocityY = 4;
  leaf.velocityY = 3;
  

  edges= createEdgeSprites();
  rabbit.collide(edges);

spawnApples();
spawnLeafs();

  drawSprites();
}

function spawnApples(){
  if (frameCount % 80 === 0) {
    apple = createSprite(random(50,350),40,20,20);
    apple.velocityY = 4;
    apple.addImage(appleImg);
    apple.scale =0.08;
    apple.lifetime = 60
  }
}

function spawnLeafs(){
  if (frameCount % 80 === 0) {
    leaf = createSprite(random(50,350),40,10,20);
   leaf.velocityY = 3;
    leaf.addImage(leafImg);
    leaf.scale =0.08;
    leaf.lifetime = 100
  }
}