class Ground{
constructor(x,y,width,height){
//the properties of the ground
var ground_options ={
isStatic: true
}

this.body = Bodies.rectangle(x,y,width,height,ground_options);
this.width=width;
this.height=height;
World.add(world,this.body);

}
display(){
rectMode(CENTER);
fill(255);
rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
}