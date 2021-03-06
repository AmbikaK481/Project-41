class umbrella {
    constructor(x, y) {
      var options = {
          isStatic = true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("C:\Algorithm\images\Walking Frame\walking.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill(255);
      image(this.image, 0, 0,this.width, this.height);
      pop();
    }
  };