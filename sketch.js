var bullet, wall;
var speed, weight,thickness;



  function setup() {
  createCanvas(1600,400);

  speed=random(230,320);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50, 5);

  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="gray";



}

function draw() {
  background(0);
    
  if(coll1(bullet,wall))
  {
      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);
  
      }
  
      if(damage<=10)
      {
        wall.shapeColor=color(0,255,0);
      }
    
    }
  
  drawSprites();
}
function coll1(b1,w1){
  brt=b1.x+b1.width;
  wlt=w1.x;
  if(brt>=wlt){
    return true;

  }
  return false;
}

