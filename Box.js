class Box{
constructor(x,y,width,height){
    //properties of boxes
    var options ={
        restitution: 0.8, 
        friction:0.3,
        density:1.0
    }
    //creating the box
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    //box is being added
    World.add(world,this.body);
}
//functions of the boxes
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill(255);
rect(0,0,this.width,this.height)
pop();
}
}
