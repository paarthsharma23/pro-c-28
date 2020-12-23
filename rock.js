class Rock {
constructor(x,y,width,height){
this.width = width ; 
this.height = height ; 
var optio = {
'isStatic': false ,
 restitution:0.8 ,
 friction:1 , 
 density:1.2
}
this.body = Bodies.rectangle(x,y,this.width,this.height,optio);
this.img = loadImage("stone.png");
World.add(world,this.body);
}

display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.img, 0, 0, this.width, this.height);
    pop();
}
}