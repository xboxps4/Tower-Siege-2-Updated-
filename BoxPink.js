class BoxPink {
    constructor(x,y){
        var option={
            isStatic:false
        }
     this.body = Bodies.rectangle(x,y,20,20,option);
     this.visibility=225;
     World.add(world, this.body);
    }

    score(){
if (this.visibility<0 && this.visibility>-105){
    score++;
}

    }
    display(){
      var  position=this.body.position;
    rectMode(CENTER);
    fill("red");
    if(this.body.speed<3){
        rect(position.x,position.y,20,20);
    }else{

        World.remove(world,this.body);
        this.visibility=this.visibility-5
        tint(255,this.visibility);
        } 
   

    }
}