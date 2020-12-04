class Box {
    constructor(x,y){
        var option={
            isStatic:false
        }
     this.body = Bodies.rectangle(x,y,30,30,option);
     World.add(world, this.body);
    }
    display(){
      var  position=this.body.position;
    rectMode(CENTER);
    fill("yellow");
    rect(position.x,position.y,20,20);

    }
}