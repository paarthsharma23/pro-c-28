class Sling {
    constructor(bodyA,pointB){
    var options = {
        bodyA :bodyA,
        'pointB':pointB,
        'stiffness':0.05,
        'lenght':10
    }
    this.bodyA=bodyA;
    this.pointB=pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    }

    fly(){
    this.sling.bodyA = null ; 
    }
    
    attach(body){
        this.sling.bodyA = body;
    }

    display(){
    var pointA = this.bodyA.position;
    var pointB = this.pointB;
    push();
    strokeWeight(3);
    stroke(44,22,8);
    if(this.sling.bodyA){
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    pop();
    }

}