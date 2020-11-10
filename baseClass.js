//parent class(means it can be used in any other class)
class BaseClass{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.5,
            'density':0.3,
           
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        fill("green");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r)
        pop();
      }
}