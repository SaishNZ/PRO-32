class Rope{
    constructor(body1, point2) {
        var options = {
            bodyA : body1,
           pointB:point2,
            length : 50,
            stiffness : 0.1
        }

        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
        
        this.p=point2

        this.thor = loadImage("Images/Thor.png");
    }

    display() {
       
        if(this.body.bodyA) {

            push()
            strokeWeight(4);
            stroke("#301608");
            line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.p.x, this.p.y); 
            pop();

        }
        image(this.thor, window.innerWidth/9, window.innerHeight/3.8, 300, 300);
    }

    //option given so that the hammer cannot be moved after being released
    fly() {
       this.body.bodyA = null;  
    }

}