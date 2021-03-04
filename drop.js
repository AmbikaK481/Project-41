class drop {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.1,
          'density':1.0
      }
      this.body = Bodies.circle(x,y,width,height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    displayDrop(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill(255);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
} 
    update();{
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})

        }
    }