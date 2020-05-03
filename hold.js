class Hold{
    constructor(bodyA,pointB){
       var options = {
           bodyA : bodyA,
           pointB : pointB,
           stiffness:0.04,
           
       }
       this.pointB = pointB
       this.hold = Constrained.create(options);
       World.add(world,this.hold);
    }
   

        

    
    display(){
        if(this.hold.bodyA){
        var pointA = this.hold.bodyA.position;
        var pointB = this.pointB
        strokeWeight(10);
        stroke("white");
     line(pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
    fly(){
        this.hold.bodyA = null;
    }
}