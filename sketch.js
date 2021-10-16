var helicopterImg, bgImg  , packageImg;
var helicopterSprite, packageSprite;
var package,boxBottomBody, boxLeftBody, boxRightBody;
var myengine , myworld;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterImg=loadImage("helicopter.png")
	bgImg=loadImage("bg.png")
	packageImg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 50 , 20 , 20);
	packageSprite.shapeColor="yellow";
	//packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterImg)
	helicopterSprite.scale=0.6

//	engine = Engine.create();
//	world = engine.world;
	
	boxBottomBody = new Box(400, 610, 200,20);
 	boxLeftBody = new Box(310, 570, 20,100);
 	boxRightBody = new Box(490, 570, 20,100);
 var packageOptions = {
	restitution:0.4, isStatic:true
 }
	package = Bodies.rectangle(width/2 , 110 , 10 ,10 ,packageOptions);
	
	World.add(world, package);

}


function draw() {
	Engine.update(engine);
	background(bgImg);
	
	packageSprite.x= package.position.x 
	packageSprite.y= package.position.y 

	boxRightBody.display();
	boxLeftBody.display();
	boxBottomBody.display();

	drawSprites(); 
	
}

function keyPressed() {
	
	if (keyCode === LEFT_ARROW) {

		helicopterSprite.x=helicopterSprite.x-20;    
		translation={x:-20,y:0}
		Matter.Body.translate(package, translation)

	  } else if (keyCode === RIGHT_ARROW) {

		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:20,y:0}
		Matter.Body.translate(package, translation)
		
	  }
	  
	if (keyCode === DOWN_ARROW) {
	   //make the static property of packageBody as false
    Body.setStatic(package,false);
	 
	}
}
  
