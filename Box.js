class Block{
  constructor(x,y,width,height){
    var options = {
      isStatic:false,
      restitution:0.5,
      friction:0.0001,
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  display(){
    var angle=this.body.angle;
    var pos=this.body.position;
    push();
    rectMode(CENTER);
    rotate(angle);
    translate(pos.x,pos.y);
    rect(0,0,this.width,this.height);
    pop();
  }
}