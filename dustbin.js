class DUSTBIN {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x,y,width,0,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbingreen.png");

      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("brown");
      image(this.image, this.x, this.y, this.width, this.height);
    }
  };
