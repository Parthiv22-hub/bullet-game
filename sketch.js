var bullet;
var wall;
var speed;
var weight;
var thickness;



function setup() {
  createCanvas(1600,400);

  bullet =  createSprite(99,170, 50, 50);

wall = createSprite(1200,200,thickness,height/2);

wall.shapeColor=color(230,230,230);

speed=random(223,323);

weight=random(30,52);

thickness=random(22,83);

bullet.velocityX=speed;

bullet.shapeColor=color("yellow");

}

function draw() {
  
  background(0,0,0);  
 

  if(hascolided(bullet,wall));
{

bullet.velocityX=0;
var damage=0.5 *weight *speed *speed/(thickness *thickness *thickness);

if(damage>10)
{
    wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
    wall.shapeColor=color(0,255,0);
}

}

  drawSprites();
}



function hascolided(lbullet,lwall){

bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge)
{
return true;
}
return false;

}
