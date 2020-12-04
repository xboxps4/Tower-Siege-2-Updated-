class BoxGreen {
    constructor(x,y)
    {
     this.body = Bodies.rectangle(x,y,20,20);
     this.visibility=225;
     World.add(world, this.body);
    }
    score(){
        if (this.visibility<0 && this.visibility>-105){
            score++;}
        }
    display(){
        var  position=this.body.position;
    rectMode(CENTER);
    fill("green");

     if(this.body.speed<3){
        rect(position.x,position.y,20,20);
    }else{

        World.remove(world,this.body);
        this.visibility=this.visibility-5
        tint(255,this.visibility);
        } 
    

    }
   
        
}