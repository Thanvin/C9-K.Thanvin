function setup() {
  createCanvas(1520,700);
  background(51);
  box = createSprite(750,300,30,30);
 
}

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    box.x+=3
    box.height+=2;
    box.shapeColor="lawngreen"
  }
  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.x-=3
    box.width+=2;
    box.shapeColor="orangered"
  }
  
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.y-=3
    box.shapeColor="brown"
    box.rotation+=30;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
   box.y+=3 
   box.scale = box.scale +0.1;
   box.shapeColor="purple"
  }


  
  drawSprites();
}

