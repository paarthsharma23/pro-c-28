class Mango {
constructor(x,y,width,height){
var option={
    isStatic : true ,
    restitution : 0 , 
    friction : 1
}
this.radius = 10
this.body = Matter.Bodies.circle(x,y,this.radius,option);
this.mango = loadImage("mango.png")
World.add(world,this.body);
this.width = width ; 
this.height = height ;
}
display(){
push();
translate(this.body.position.x,this.body.position.y);
imageMode(CENTER);
image(this.mango,0,0,this.width,this.height);
pop();
}
}